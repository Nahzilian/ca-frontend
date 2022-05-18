import { useState } from 'react'

const useSessionStorage = (defaultState: Object = {}) => {

    let sessionStorageLength = window.sessionStorage.length
    let sessionStorageData = { ...window.sessionStorage }

    if (sessionStorageLength > 0) {
        sessionStorageData = { ...sessionStorageData, ...defaultState }
    }

    const [state, setState] = useState(sessionStorageData)

    const setItem = (key: string, item: any) => {
        // Set session storage item
        window.sessionStorage.setItem(key, item)
        setState(prev => {
            return {
                ...prev,
                [key]: item
            }
        })
    }

    return [state, setItem]
}

export default useSessionStorage