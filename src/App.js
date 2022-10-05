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

    if (emoji === undefined) {
      emoji = "No data Found ... Please Try With other Flag Emoji";
    }
    setEmoji(emoji);
  }

  var emojiArray = Object.keys(emojiDirectory);
  var emojiMapArray = emojiArray.map((item) => {
    return item;
  });

  function onEmojiClicked(item) {
    var emoji = emojiDirectory[item];
    setEmoji(emoji);
  }
  return (
    <div className="App">
      <h1> -- Flag Interpretor -- </h1>
      <input onChange={onInputChange} placeholder="Enter Emoji" />
      <div className="displayEmojiText">
        <h2>meaning: {emoji}</h2>
        <h3>
          Flags in our Database:
          {emojiMapArray.map((item) => {
            return (
              <span
                onClick={() => onEmojiClicked(item)}
                key={item}
                style={{ padding: "1rem" }}
              >
                {item}
              </span>
            );
          })}
        </h3>

        <div className="Social-Links translate_social">
          {/* Linked-in */}

          <a
            className="hoverColor"
            href="https://www.linkedin.com/in/avinash-yadav-588744151/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* instagram */}

          <a
            className="hoverColor"
            href="https://www.instagram.com/avi_nash_yadav/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-instagram" />
          </a>

          {/* twiter */}
          <a
            className="hoverColor"
            href="https://twitter.com/Aviyadav25"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-twitter-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a
            className="hoverColor"
            href="https://github.com/ProgrammerAvinash"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
        <p>© 2022 || Avinash Yadav</p>
      </div>
    </div>
  );
}
export default App;

// https://codesandbox.io/s/flag-interpretor-bx9e32?file=/src/App.js
