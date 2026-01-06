// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-2">Activity Log</h1>
//       <p className="text-gray-600">
//         Monitor user activities and system events.
//       </p>

//       <div className="mt-6 p-4 bg-white rounded shadow">
//         <p className="text-gray-500">Activity table will go here.</p>
//       </div>
//     </div>
//   );
// }

import ActivityTable from "@/components/table/ActivityTable";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Activity Log</h1>
      <p className="text-gray-600 mb-6">
        Monitor user activities and system events.
      </p>

      <ActivityTable />
    </div>
  );
}
