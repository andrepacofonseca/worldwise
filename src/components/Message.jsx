import styles from "./Message.module.css";

function Message(prop) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {prop.message}
    </p>
  );
}

export default Message;
