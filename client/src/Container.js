import PickColor from "./components/PickColor";
import { useContext, useEffect } from "react";
import ColorsContext from "./contexts/ColorsContext";
import { initSocket, recieveColor, getInitialColor } from "./SocketService";

import "./App.css";

function Container() {
  const { color, setColor } = useContext(ColorsContext);
  useEffect(() => {
    initSocket();

    getInitialColor((data) => {
      console.log(data);
      setColor(data);
    });

    recieveColor((color) => {
      setColor(color);
    });
  }, [setColor]);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <PickColor />
    </div>
  );
}

export default Container;
