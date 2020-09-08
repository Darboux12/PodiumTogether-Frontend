import React, {useEffect, useRef} from "react";

function useClickOutside(ref,id) {

    useEffect(() => {

        function handleClickOutside(event) {

            if (ref.current && !ref.current.contains(event.target)) {

                document.getElementById(id).style.display = "none";

            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter(props) {

    const wrapperRef = useRef(null);

    useClickOutside(wrapperRef,props.id);

    return <div id={props.id} ref={wrapperRef}>HEj</div>;
}