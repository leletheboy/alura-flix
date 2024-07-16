import { useEffect, useState } from "react"

import "./styles.css"

const Select = ({ placeholder, label, values = [], selected, name }) => {
    const [ defaultValue, setDefaultValue ] = useState("")

    useEffect(() => {
        setDefaultValue(selected)
    }, [selected])

    console.log(values, selected)

    return (
        <label className="form-control d-flex flex-column">
            <span className="form-label">{label}</span>
            <select name={name} value={defaultValue} onChange={e => setDefaultValue(e.target.value)}>
                <option value="">{placeholder}</option>
                {values.map((value, i) => (
                    <option key={i} value={value}>{value}</option>
                ))}
            </select>
        </label>
    )
}

export default Select