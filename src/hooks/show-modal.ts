import {useState} from "react";

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(true);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};