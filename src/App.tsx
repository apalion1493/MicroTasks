import './App.css'
import { Body } from './site/Body'
import { Footer } from './site/Footer'
import { Header } from './site/Header'
import { TestComponent } from './site/NewComponent'

let ArrayStudents = [
	{ id: 1, name: 'Name1', age: 10 },
	{ id: 2, name: 'Name2', age: 11 },
	{ id: 3, name: 'Name3', age: 12 },
	{ id: 4, name: 'Name4', age: 13 },
	{ id: 5, name: 'Name5', age: 14 },
	{ id: 6, name: 'Name6', age: 15 },
	{ id: 7, name: 'Name7', age: 16 },
]

function App() {
	return (
		<div className='App'>
			<Header title={'New Header'} />
			<Body titleForBody={'New Body'} />
			<Footer titleForFooter={'New Footer'} />
			<TestComponent students={ArrayStudents} />
		</div>
	)
}

export default App
