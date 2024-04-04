type TestType = {
	students: Array<StudentsType>
}

type StudentsType = {
	id: number
	name: string
	age: number
}

export const TestComponent = (props: TestType) => {
	const topCars = [
		{ manufacturer: 'BMW', model: 'm5cs' },
		{ manufacturer: 'Mercedes', model: 'e63s' },
		{ manufacturer: 'Audi', model: 'rs6' },
		{ manufacturer: 'Audi', model: 'rs6' },
		{ manufacturer: 'Audi', model: 'rs6' },
	]

	return (
		<>
			<ul>
				{props.students.map((ObjectStudent, index) => {
					return (
						<li key={index}>
							<ul>
								<li>Name - {ObjectStudent.name}</li>
								<li>Age - {ObjectStudent.age}</li>
							</ul>
							<br />
						</li>
					)
				})}
			</ul>
			<table>
				{topCars.map((ObjectCar, index) => {
					return (
						<tbody key={index}>
							<tr>
								<th>{ObjectCar.manufacturer}</th>
							</tr>
							<tr>
								<td>{ObjectCar.model}</td>
							</tr>
						</tbody>
					)
				})}
			</table>
		</>
	)
}
