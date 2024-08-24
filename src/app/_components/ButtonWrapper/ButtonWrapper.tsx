import React, { useRef } from "react";

import styles from "./ButtonWrapper.module.css";

interface ButtonWrapperProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  innerRef?: React.RefObject<HTMLButtonElement>;
}

function ButtonWrapper({ onClick, children, innerRef }: ButtonWrapperProps) {
  return (
    <button className={styles.wrapper} onClick={onClick} ref={innerRef}>
      <span className={styles.overlay} aria-hidden={true}></span>
      {children}
    </button>
  );
}

export default ButtonWrapper;

