import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from './api/utils/Airtable';
import { useEffect } from 'react';
import { useTodoContext } from '../contexts/TodosContext';
import auth0 from './api/utils/auth0';
import TodoForm from '../components/TodoForm';

export default function Home({ initialTodos = [], user }) {
	const { todos, setTodos } = useTodoContext();
	useEffect(() => {
		if (initialTodos) {
			setTodos(initialTodos);
		}
	}, []);
	return (
		<div className="max-w-xl p-2 m-auto">
			<Head>
				<title>TODO App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar user={user} />
				<>
					{user ? (
						<TodoForm />
					) : (
						<div className="w-full px-4 py-4 my-5 text-white bg-yellow-500 rounded">
							<h1 className="text-xl">Debes iniciar sesion para acceder a la aplicacion</h1>
						</div>
					)}
					<ul>{todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}</ul>
				</>
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await auth0.getSession(context.req, context.res);
	let todos = [];
	if (session?.user) {
		todos = await table.select({ filterByFormula: `userId = '${session.user.sub}'` }).firstPage();
	}
	return {
		props: {
			initialTodos: minifyRecords(todos),
			user: session?.user || null,
		},
	};
}
