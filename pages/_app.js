import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { TodosProvider } from '../contexts/TodosContext';
import { UserProvider } from '@auth0/nextjs-auth0';
function MyApp({ Component, pageProps }) {
	return (
		<TodosProvider>
			<div className="container max-w-xl mx-auto my-10">
				<Component {...pageProps} />
			</div>
		</TodosProvider>
	);
}

export default MyApp;
