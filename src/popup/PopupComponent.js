import React, { useRef, useEffect } from "react"
import styles from './styles.module.css'


function PopupComponent(props) {

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                props.setVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    props.visible ?
    <div className={styles.popupAllPage}>
      <div className={styles.popupDiv} ref={wrapperRef} style={{
        backgroundColor: props.BGColor,
      }}>
        {props.children}
      </div>
    </div>
    :
    null
  )
}

export default PopupComponent;