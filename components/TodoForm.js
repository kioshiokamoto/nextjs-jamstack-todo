import { useState } from 'react';
import { useTodoContext } from '../contexts/TodosContext';

export default function TodoForm() {
	const [todo, setTodo] = useState('');
	const { addTodo } = useTodoContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(todo.trim()==='') return
		addTodo(todo);
		setTodo('');
	};
	return (
		<form className="my-6 form" onSubmit={handleSubmit}>
			<div className="flex flex-col mb-2 text-sm">
				<label className="mb-2 font-bold text-gray-800" htmlFor="todo">
					Todo
				</label>
				<input
					type="text"
					name="todo"
					id="todo"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					placeholder="ej: Aprender GraphQL"
					className="p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
				/>
			</div>
			<button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
				Submit
			</button>
		</form>
	);
}
