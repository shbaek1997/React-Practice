import styles from "../CSS/Button.module.css";
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
export { Button };
