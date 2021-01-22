import { useContext } from "react";
import styles from "./styles.module.css";
import ColorsContext from "../contexts/ColorsContext";
import { sendColor } from "../SocketService";

function PickColor() {
  const { color, setColor } = useContext(ColorsContext);

  const handleColor = () => {
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
        <div>HEX CODE</div>
        <div>{color}</div>
      </div>
    </div>
  );
}

export default PickColor;
