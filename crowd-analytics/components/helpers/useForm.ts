import { useState, useCallback } from 'react'

const useForm = (st = {}):[Object, any] => {
    const [state, setState] = useState(st)

    const updateState = useCallback((key: string, value: any): void =>
        setState(prev => {
            return {
                ...prev,
                [key]: value
            }
        }), [])

    return [state, updateState]
}

export default useForm