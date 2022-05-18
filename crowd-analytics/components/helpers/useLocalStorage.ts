import { useState } from 'react'

const useLocalStorage = (defaultState: Object = {}) => {

    let localStorageLength = window.localStorage.length
    let localStorageData = { ...window.localStorage }

    if (localStorageLength > 0) {
        localStorageData = { ...localStorageData, ...defaultState }
    }

    const [state, setState] = useState(localStorageData)

    const setItem = (key: string, item: any) => {
        // Set localstorage item
        window.localStorage.setItem(key, item)
        setState(prev => {
            return {
                ...prev,
                [key]: item
            }
        })
    }

    return [state, setItem]
}

export default useLocalStorage