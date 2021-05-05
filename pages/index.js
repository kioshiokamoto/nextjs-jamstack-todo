import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from '../utils/Airtable';
import { useEffect } from 'react';
import { useTodoContext } from '../contexts/TodosContext';

export default function Home({ initialTodos = [] }) {
	const { todos, setTodos } = useTodoContext();
	useEffect(() => {
		if (initialTodos) {
			setTodos(initialTodos);
		}
	}, []);
	return (
		<div className="max-w-xl m-auto p-2">
			<Head>
				<title>TODO App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<>
					<ul>{todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}</ul>
				</>
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	let todos = await table.select({}).firstPage();
	return {
		props: {
			initialTodos: minifyRecords(todos),
		},
	};
}
