export default function Navbar() {
	return (
		<nav className="flex items-center justify-between py-4">
			<p className="text-2xl font-bold text-grey-800">My Todos</p>
			<div className="flex">
				<a href="/api/logout" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
					Logout
				</a>
				<a href="/api/login" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
					Login
				</a>
			</div>
		</nav>
	);
}
