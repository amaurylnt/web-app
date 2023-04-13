import React from "react";
import icon from "./coffee-cup.png";
import iconCrossed from "./coffee-cup-crossed.png";

import { css } from "@emotion/css";
import "./App.css";

function App() {
  const [isUp] = React.useState(false);
  return (
    <div className={styles.wrapper(isUp)}>
      <header className="App-header">
        <img src={isUp ? icon : iconCrossed} className="App-logo" alt="logo" />
        <p>
          {isUp ? "La machine est opérationnelle" : "la machine est en panne"}
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
