import { joker_map } from "./jokerInfo";

export function Joker({ name, data }) {
  const stakes = {
    0: {
      backgroundColor: "rgba(237, 246, 248, 0.15)",
      textColor: "whitesmoke",
      name: "n/a",
    },
    1: {
      backgroundColor: "rgb(237, 246, 248)",
      textColor: "#000000",
      name: "White Stake",
    },
    2: {
      backgroundColor: "rgb(235, 106, 92)",
      textColor: "#282c34",
      name: "Red Stake",
    },
    3: {
      backgroundColor: "rgb(104, 161, 133)",
      textColor: "#282c34",
      name: "Green Stake",
    },
    4: {
      backgroundColor: "rgb(83, 98, 102)",
      textColor: "whitesmoke",
      name: "Black Stake",
    },
    5: {
      backgroundColor: "rgb(69, 154, 246)",
      textColor: "#282c34",
      name: "Blue Stake",
    },
    6: {
      backgroundColor: "rgb(134, 114, 218)",
      textColor: "#282c34",
      name: "Purple Stake",
    },
    7: {
      backgroundColor: "rgb(214, 129, 86)",
      textColor: "#282c34",
      name: "Orange Stake",
    },
    8: {
      backgroundColor: "rgb(240, 166, 58)",
      textColor: "#282c34",
      name: "Gold Stake",
    },
  };

  const wins = Object.keys(data["wins"]);
  let maxStake = 0;
  if (wins.length > 0) {
    maxStake = Math.max(...wins);
  }

  let processedName;
  let imageSource;
  let wikiLink;
  if (name in joker_map) {
    processedName = joker_map[name]["properName"];
    imageSource = require("./" + joker_map[name]["imagePath"]);
    wikiLink = joker_map[name]["wiki"];
  } else {
    processedName = name;
    imageSource = require("./jokers/j_joker.png");
    wikiLink = "https://balatrogame.fandom.com/wiki/Balatro_Wiki";
  }

  return (
    <div
      style={{
        backgroundColor: stakes[maxStake].backgroundColor,
        padding: "12px",
        borderStyle: maxStake ? "none" : "dashed",
        borderRadius: "8px",
        color: stakes[maxStake].textColor,
      }}
    >
      <a href={wikiLink} target="_blank" rel="noreferrer">
        <img
          src={imageSource}
          alt={processedName}
          style={{ height: "20vh" }}
        ></img>
      </a>
      <p
        style={{
          textTransform: "capitalize",
        }}
      >
        <strong>{processedName}</strong>
      </p>
      <p>Best Win: {stakes[maxStake].name}</p>
    </div>
  );
}
