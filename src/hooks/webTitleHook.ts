import { useEffect, useRef } from "react";

export const webTitleHook = (title: string) => {
    const defaultTitle = useRef<string>(document.title)

    useEffect(() => {
        document.title = title || defaultTitle.current
    }, [title])
}