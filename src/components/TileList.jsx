import React from "react";
import Tile from "./Tile";

// takes an array of objects
const TileList = ({ tileObjects }) => {
  return (
    <ul>
      {tileObjects.map((tile, index) => (
        <Tile key={index} tileContent={tile} />
      ))}
    </ul>
  );
};

export default TileList;
