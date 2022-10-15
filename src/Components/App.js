import { Button } from "./Button";
import styles from "../CSS/App.module.css";
function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Practicing React</h1>
      <Button text="First Button" />
    </div>
  );
}

export default App;
