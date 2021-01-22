import { useContext } from "react";
import styles from "./styles.module.css";
import ColorsContext from "../contexts/ColorsContext";
import { sendColor } from "../SocketService";

function PickColor() {
  const { colors, setColors } = useContext(ColorsContext);

  const handleColor = () => {
    sendColor(colors);
  };
  return (
    <div className={styles.wrapper}>
      <input type="color" onChange={(e) => setColors(e.target.value)} />
      <button onClick={handleColor}>Change Color</button>
    </div>
  );
}

export default PickColor;
