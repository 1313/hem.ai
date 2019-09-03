import { useState, useEffect } from 'react';
interface WindowDimensionsState {
    height: number;
    width: number;
}
export function useWindowResize(): WindowDimensionsState {
    const [windowDimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    function listener(): void {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }
    useEffect(() => {
        window.addEventListener('resize', listener);
        return (): void => window.removeEventListener('resize', listener);
    });
    return windowDimensions;
}
