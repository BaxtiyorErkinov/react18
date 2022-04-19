import React, {useState, useTransition, useMemo} from 'react';
import { defaultData } from '../data'



const Transition = () => {
	const [data, setData] = useState(defaultData)
	const [value, setValue] = useState("");
	const [filteredValue, setFilteredValue] = useState("");
	const [isPending, startTransition] = useTransition()

	const filteredData = useMemo(() => {
		return data.filter(item => item.title.toLowerCase().includes(filteredValue))
	}, [filteredValue])


	const changeHanler = (e) => {
		setValue(e.target.value)
		startTransition(() => {
			setFilteredValue(e.target.value)
		})
	}


	return (
		<>
			<input type="text" onChange={(e) => changeHanler(e)}/>
			{isPending && <h1>Loading...</h1>}
			{filteredData.map(item => {
				return <p>{item.title}</p>
			})}
		</>
	)
}


export default Transition