# Copyright 2025 Google LLC All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tools for fetching activity reports using the Data API."""

from typing import Any, Dict

from analytics_mcp.tools.reporting.core import run_report


def _get_activity_report_description() -> str:
    """Returns the description for the `get_activity_report` tool."""
    return f"""
          {get_activity_report.__doc__}
          """


async def get_activity_report(
    property_id: int | str,
    start_date: str,
    end_date: str,
    user_id: str = None,
    limit: int = 10,
) -> Dict[str, Any]:
    """Retrieves the top event activities for a Google Analytics property.

    Args:
        property_id: The Google Analytics property ID. Accepted formats are:
          - A number
          - A string consisting of 'properties/' followed by a number
        start_date: The start date for the report (e.g., "7daysAgo", "2023-01-01").
        end_date: The end date for the report (e.g., "today", "2023-01-31").
        user_id: (Optional) A specific User ID to filter the activities. Note: this uses the 'customUser:user_id' dimension by default.
        limit: (Optional) The maximum number of event activities to return (default 10).
    """
    
    dimension_filter = None
    if user_id:
        dimension_filter = {
            "filter": {
                "field_name": "customUser:user_id",
                "string_filter": {
                    "value": user_id,
                    "match_type": "EXACT"
                }
            }
        }
        
    return await run_report(
        property_id=property_id,
        date_ranges=[{"start_date": start_date, "end_date": end_date}],
        dimensions=["eventName"],
        metrics=["eventCount", "activeUsers"],
        dimension_filter=dimension_filter,
        order_bys=[{
            "desc": True,
            "metric": {"metric_name": "eventCount"}
        }],
        limit=limit
    )
