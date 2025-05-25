import { useState } from "react"

export const useInput = (initialState: string) => {

    const [input, setInput] = useState(initialState);

    const clearInput = () => {
        setInput('');
    }
    return [input, setInput, clearInput] as const
}
