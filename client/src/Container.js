import PickColor from "./components/PickColor";
import { useContext, useEffect } from "react";
import ColorsContext from "./contexts/ColorsContext";
import { initSocket, recieveColor } from "./SocketService";

import "./App.css";

function Container() {
  const { colors, setColors } = useContext(ColorsContext);
  useEffect(() => {
    initSocket();
    recieveColor((color) => {
      setColors(color);
    });
  }, [setColors]);

  return (
    <div className="App" style={{ backgroundColor: colors }}>
      <PickColor />
    </div>
  );
}

export default Container;
