import { useState, useCallback } from 'react'

type FormOptions = {
    [key: string]: any
    username?: string
    password?: string
    passCheck?: string
    firstName?: string
    lastName?: string
    address?: string
    city?: string
    province?: string
    postalCode?: string
    point?: number
    size?:number
}

const useForm = (st:FormOptions = {}):[FormOptions, any, any] => {
    const [state, setState] = useState(st)

    const updateState = useCallback((key: string, value: any): void =>
        setState(prev => {
            return {
                ...prev,
                [key]: value
            }
        }), [])

    const getValueOf = (key: string): void => {
        if (key && state.hasOwnProperty(key))
            return state[key as keyof FormOptions]
        return undefined
    }

    return [state, updateState, getValueOf]
}

export default useForm