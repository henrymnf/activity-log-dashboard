export default function ActivityTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              User
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Action
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Module
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="px-4 py-3">John Doe</td>
            <td className="px-4 py-3">Login</td>
            <td className="px-4 py-3">Auth</td>
            <td className="px-4 py-3">2026-01-06 09:20</td>
          </tr>

          <tr className="border-t">
            <td className="px-4 py-3">Jane Smith</td>
            <td className="px-4 py-3">Update Profile</td>
            <td className="px-4 py-3">User</td>
            <td className="px-4 py-3">2026-01-06 08:55</td>
          </tr>

          <tr className="border-t">
            <td className="px-4 py-3">Admin</td>
            <td className="px-4 py-3">Delete User</td>
            <td className="px-4 py-3">Admin Panel</td>
            <td className="px-4 py-3">2026-01-05 22:10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
