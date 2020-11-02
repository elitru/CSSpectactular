import { useEffect } from "react";

export const useClosableWithEscape = (onClose: () => void, onExec: () => void = () => { }, deps: any[] | undefined) => {
    return useEffect(() => {
        onExec();
        const onKeyDown = (event: KeyboardEvent): void => {
            if(event.keyCode === 27) {
                onClose();
            }
        }

        window.addEventListener('keydown', onKeyDown, false);

        return () => {
            window.removeEventListener('keydown', onKeyDown, false);
        };
    }, deps);
}