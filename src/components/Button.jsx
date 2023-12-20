import styles from "./Button.module.css";

function Button(prop) {
  const { children, onClick, type } = prop;
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
