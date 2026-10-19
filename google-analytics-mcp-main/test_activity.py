import asyncio
from analytics_mcp.tools.reporting.activity import get_activity_report
from analytics_mcp.tools.admin.info import get_account_summaries

async def main():
    print("Fetching Account Summaries to find your Property ID...")
    try:
        # 1. Fetch the account summaries to list out properties
        summaries = await get_account_summaries()
        print("\n--- Account Summaries ---")
        for summary in summaries.get("account_summaries", []):
            print(f"Account: {summary.get('displayName')}")
            for prop in summary.get("propertySummaries", []):
                print(f"  -> Property Name: {prop.get('displayName')} | Property ID: {prop.get('property')}")
        
        print("\n============================================\n")
        
        # 2. Get the Property ID from the user (you can hardcode this if you know it)
        property_id = input("Enter your Property ID (e.g., properties/123456789) from the list above: ")
        
        # 3. Test the new get_activity_report tool
        print(f"\nFetching Activity Report for {property_id}...")
        report = await get_activity_report(
            property_id=property_id,
            start_date="7daysAgo",
            end_date="today",
            limit=10
        )
        
        print("\n--- Activity Report (Top 10 Events) ---")
        # Print the report neatly
        for row in report.get("rows", []):
            event_name = row["dimension_values"][0]["value"]
            event_count = row["metric_values"][0]["value"]
            active_users = row["metric_values"][1]["value"]
            print(f"Event: {event_name.ljust(25)} | Count: {event_count.ljust(5)} | Active Users: {active_users}")
            
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please ensure your GOOGLE_APPLICATION_CREDENTIALS environment variable is set correctly.")

if __name__ == "__main__":
    asyncio.run(main())
