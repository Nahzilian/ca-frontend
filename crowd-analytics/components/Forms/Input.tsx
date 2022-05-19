import { useState } from 'react'
import style from '../../styles/components/Forms.module.sass'

interface InputElement {
    label?: string
    value?: any
    type?: string
    _key: string
    required?: boolean
    invalid?: boolean
    onChange?(_key: string, val: string): void
    onBlur?(...args: any[]): void
}

const Input = ({ label, value, type = "text", _key, onChange, required = false, invalid = false, onBlur }: InputElement) => {
    const [inputValue, setValue] = useState(value)

    const onChangeWrapper = (val: string) => {
        setValue(val)
        if (typeof onChange === 'function')
            onChange(_key, val)
    }

    return (
        <div className={`${style["form-wrapper"]}`}>
            <input 
            type={type} 
            className={`${style.input} ${invalid ? style.invalid : ''}`} 
            value={inputValue} 
            onChange={(e) => onChangeWrapper(e.target.value)} required={required}
            onBlur={onBlur}
            />
            <label className={inputValue && inputValue.length ? `${style.active}` : ''}>{label}</label>
            {invalid ? <span className={style.error}>{`Invalid ${_key}`}</span> : null}
        </div>
    )
}

export default Input