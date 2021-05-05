import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from '../utils/Airtable';

export default function Home({ initialTodos }) {
	return (
		<div className="max-w-xl m-auto p-2">
			<Head>
				<title>TODO App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<>
					<ul>{initialTodos && initialTodos.map((todo) => <Todo todo={todo} key={todo.id} />)}</ul>
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
