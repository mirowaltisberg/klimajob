"""Fail if the Klima scraper workflow can cross its publication boundary."""

from pathlib import Path


WORKFLOW_PATH = Path(__file__).parents[1] / ".github" / "workflows" / "scrape.yml"
APPROVAL_VARIABLE = "KLIMA_PUBLISHING_APPROVED"
workflow = WORKFLOW_PATH.read_text(encoding="utf-8")

scrape_marker = "\n  scrape:\n"
publish_marker = "\n  publish:\n"
if scrape_marker not in workflow or publish_marker not in workflow:
    raise AssertionError("scrape or publish job is missing")

scrape_section = workflow.partition(scrape_marker)[2].partition(publish_marker)[0]
publish_section = workflow.partition(publish_marker)[2]

scrape_caps = [
    line.strip() for line in scrape_section.splitlines() if "max-parallel:" in line
]
if scrape_caps != ["max-parallel: 2"]:
    raise AssertionError("Klima scrape concurrency must be capped at exactly two")
if "max-parallel: 5" in workflow:
    raise AssertionError("unsafe five-worker concurrency cap is present")

dispatch_input = """  workflow_dispatch:
    inputs:
      confirm_publish:
        description: "Type PUBLISH to allow this manual run to publish"
        required: false
        default: ""
        type: string"""
if dispatch_input not in workflow:
    raise AssertionError("Klima manual publication input must be optional and empty by default")
if workflow.count("inputs.confirm_publish") != 1:
    raise AssertionError("Klima confirmation input must be consumed exactly once")

guard = (
    "if: ${{ github.event_name == 'workflow_dispatch' "
    "&& inputs.confirm_publish == 'PUBLISH' "
    f"&& vars.{APPROVAL_VARIABLE} == 'true' }}}}"
)
guard_lines = [
    line for line in workflow.splitlines() if APPROVAL_VARIABLE in line
]
if guard_lines != [f"    {guard}"]:
    raise AssertionError("Klima publisher must have one exact two-factor approval guard")
publish_header = publish_section.partition("\n    steps:")[0]
job_guard_lines = [
    line.strip() for line in publish_header.splitlines() if line.startswith("    if:")
]
if job_guard_lines != [guard]:
    raise AssertionError("Klima publisher must have exactly one job-scope guard")
if publish_section.find(guard) > publish_section.find("\n    steps:"):
    raise AssertionError("approval guard must precede publish-job steps")
if "github.event_name == 'workflow_dispatch'" not in guard:
    raise AssertionError("scheduled runs must be unable to satisfy the publisher guard")
if "inputs.confirm_publish == 'PUBLISH'" not in guard:
    raise AssertionError("publisher guard must require the exact manual confirmation")

if "SUPABASE_SERVICE_ROLE_KEY" in scrape_section or "secrets." in scrape_section:
    raise AssertionError("scrape workers must not receive repository secrets")

url_mapping = "SUPABASE_URL: ${{ secrets.SUPABASE_URL }}"
role_mapping = (
    "SUPABASE_SERVICE_ROLE_KEY: "
    "${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}"
)
secret_lines = [
    line.strip() for line in publish_section.splitlines() if "secrets." in line
]
if secret_lines != [url_mapping, role_mapping]:
    raise AssertionError("publisher must receive only the two reviewed Supabase secrets")

print("Klima workflow publication boundary check passed.")
