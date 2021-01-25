import PickColor from "./components/PickColor";
import { useContext, useEffect } from "react";
import ColorsContext from "./contexts/ColorsContext";
import { initSocket, recieveColor, getInitialColor } from "./SocketService";

import "./App.css";

function Container() {
  const { color, setColor } = useContext(ColorsContext);
  useEffect(() => {
    initSocket();

    // get color from database when opened browser
    getInitialColor((data) => {
      console.log(data);
      setColor(data);
    });

    // get color from database when someone changed color
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
