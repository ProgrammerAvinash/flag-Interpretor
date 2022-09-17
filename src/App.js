import React, { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("");
  const emojiDirectory = {
    "🏁": "Racing Flag",
    "🏴‍☠️": "Pirate Flag",
    "🏳️‍🌈": " Rainbow Flag",
    "🚩": "Triangular Flag",
  };
  function onInputChange(event) {
    var userInput = event.target.value;
    var emoji = emojiDirectory[userInput];

    setEmoji(emoji);
  }

  return (
    <div className="App">
      <h1> Flag Interpretor </h1>
      <input onChange={onInputChange} placeholder="Enter Emoji" />
      <div className="displayEmojiText">
        <h2>meaning: {emoji}</h2>{" "}
      </div>
    </div>
  );
}
export default App;
