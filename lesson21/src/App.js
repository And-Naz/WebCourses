import { useState, Fragment } from 'react';
import MyButton from './MyButton';
import UserList from './UserList';
import './App.css';

function App() {

	const [count, setCount] = useState( 0 );

	return (
		<Fragment>
			<MyButton onClick={() => setCount(count + 1)} >{count}</MyButton>
			<UserList />
		</Fragment>
	);
}

export default App;
