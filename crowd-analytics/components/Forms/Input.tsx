import { ChangeEventHandler, useState } from 'react'
import style from '../../styles/components/Forms.module.sass'

interface InputElement {
    label?: string
    value?: any
    type?: string
    _key: string
    onChange?(_key: string, val: string): void
}

const Input = ({ label, value, type = "text", _key, onChange}: InputElement) => {
    const [inputValue, setValue] = useState(value)

    const onChangeWrapper = (val: string) => {
        setValue(val)
        if(typeof onChange === 'function')
            onChange(_key, val)
    }

    return (
        <div className={`${style["form-wrapper"]}`}>
            <input type={type} className={`${style.input}`} value={inputValue} onChange={(e) => onChangeWrapper(e.target.value)} />
            <label className={inputValue && inputValue.length ? `${style.active}` : ''}>{label}</label>
        </div>
    )
}

export default Input