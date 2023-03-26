import { useEffect, useState } from "react";

const useResponsive = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(
        () => {
            // intialization & update
            const handleScreenResize = () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            }
            // event listener will detect the resize event and call the handleScreenResize function
            window.addEventListener('resize', handleScreenResize);
            // unmount --> cleanup
            // componentWillUnmount , remove the event listener
            return () => {
                window.removeEventListener('resize', handleScreenResize);
            }
        }, []
    )
    return { width, height };
}


export default useResponsive;