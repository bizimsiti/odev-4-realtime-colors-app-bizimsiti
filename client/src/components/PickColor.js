import { useContext } from "react";
import styles from "./styles.module.css";
import ColorsContext from "../contexts/ColorsContext";
import { sendColor } from "../SocketService";

function PickColor() {
  const { color, setColor } = useContext(ColorsContext);

  const handleColor = () => {
    // send color's value to database
    sendColor(color);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleColor}>Change Color</button>
      <div>
        <div className={styles.hexCode}>
          <div>HEX CODE</div>
          {color === "" ? <div>Loading...</div> : <div>{color}</div>}
        </div>
      </div>
    </div>
  );
}

export default PickColor;
