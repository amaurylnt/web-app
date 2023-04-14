import React from "react";
import icon from "./coffee-cup.png";
import iconCrossed from "./coffee-cup-crossed.png";
import { css } from "@emotion/css";
import "./App.css";
import useWebSocket from "react-use-websocket";

function App() {
  const [isUp, setIsUp] = React.useState(false);
  const WS_URL = process.env.REACT_APP_backend || "ws://localhost:8999";

  console.log(process.env.REACT_APP_backend);

  useWebSocket(WS_URL, {
    shouldReconnect: (closeEvent) => true,
    onMessage: (message) => {
      // get json data
      console.log(message.data);
      const data = JSON.parse(message.data);
      setIsUp(data.coffeeStatus);
    },
  });
  return (
    <div className={styles.wrapper(isUp)}>
      <header className="App-header">
        <img src={isUp ? icon : iconCrossed} className="App-logo" alt="logo" />
        <p>
          {isUp ? "La machine est opérationnelle" : "La machine est en panne"}
        </p>
      </header>
    </div>
  );
}

const styles = {
  wrapper: (isUp: boolean) => css`
    background-color: ${isUp ? "#28b18d" : "red"};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `,
};

export default App;
