import React, {useState, useDeferredValue, useMemo} from 'react';
import { defaultData } from '../data'



const Debounce = () => {
	const [data, setData] = useState(defaultData)
	const [value, setValue] = useState("");
	const [filteredValue, setFilteredValue] = useState("");
	const deferredValue = useDeferredValue(value)

	const filteredData = useMemo(() => {
		return data.filter(item => item.title.toLowerCase().includes(deferredValue))
	}, [deferredValue])


	const changeHanler = (e) => {
		setValue(e.target.value)
	}


	return (
		<>
			<input type="text" onChange={(e) => changeHanler(e)}/>
			{filteredData.map(item => {
				return <p>{item.title}</p>
			})}
		</>
	)
}


export default Debounce