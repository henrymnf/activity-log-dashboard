export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">ActivityLog</h1>
        <nav className="space-y-3">
          <p className="hover:text-gray-300 cursor-pointer">Dashboard</p>
          <p className="hover:text-gray-300 cursor-pointer">Activities</p>
          <p className="hover:text-gray-300 cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4">
          <h2 className="text-lg font-semibold">Activity Log Dashboard</h2>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
