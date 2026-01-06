export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        <ul>
          <li className="py-2">Home</li>
          <li className="py-2">Activities</li>
          <li className="py-2">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
        <p>Monitor user activities here.</p>
      </main>
    </div>
  );
}
