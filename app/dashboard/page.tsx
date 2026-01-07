import ActivityTable from "@/components/table/ActivityTable";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Activity Log</h1>
      <p className="text-black mb-6">
        Monitor user activities and system events.
      </p>

      <ActivityTable />
    </div>
  );
}
