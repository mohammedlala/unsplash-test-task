import { Provider } from 'react-redux';
import { store } from './store';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
