import { useEffect, useState } from "react"
import "./styles.css"

const Input = ({ placeholder, label, value = "", name, isTextarea = false }) => {
    const [ defaultValue, setDefaultValue ] = useState("")

    useEffect(() => {
        setDefaultValue(value)
    }, [value])

    return (
        <label className="form-control d-flex flex-column">
            <span className="form-label">{label}</span>
            {isTextarea? (
                <textarea placeholder={placeholder} name={name} defaultValue={defaultValue} rows="5" />
            ) : (
                <input placeholder={placeholder} name={name} defaultValue={defaultValue} type="text" />
            )}
        </label>
    )
}

export default Input