export default function Navbar({ user }) {
	return (
		<nav className="flex items-center justify-between py-4">
			<p className="text-2xl font-bold text-grey-800">Mis TODO's</p>
			<div className="flex">
				{user ? (
					<a href="/api/logout" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
						Cerrar Sesion
					</a>
				) : (
					<a href="/api/login" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
						Iniciar Sesion
					</a>
				)}
			</div>
		</nav>
	);
}
