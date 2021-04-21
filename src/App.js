import "./App.css";
import React, { useState } from "react";

function App() {
  const direction = ["north", "east", "south", "west"];

  const checkBus = () => {
    let angle = 0;
    let f = position.f;

    if (f.includes("north")) {
      angle = -90;
    } else if (f.includes("south")) {
      angle = 90;
    } else if (f.includes("west")) {
      angle = 180;
    } else {
      angle = 0;
    }
    return angle;
  };

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    f: "east",
    busf: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    let angle = checkBus();
    setPosition({
      ...position,
      [name]: value.toLowerCase().trim(),
      busf: angle,
    });
    console.log(position);
  };

  const handleLeft = (e) => {
    // checkBus();
    const directionR = [...direction].reverse();
    let lastFace = "";

    for (let i = 0; i < directionR.length - 1; i++) {
      if (position.f === directionR[directionR.length - 1]) {
        lastFace = directionR[0];
      }
      if (position.f === directionR[i]) {
        lastFace = directionR[i + 1];
      }
    }

    setPosition({
      ...position,
      f: lastFace,
      busf: position.busf - 90,
    });
  };

  const handleRight = () => {
    let lastFace = "";

    for (let i = 0; i < direction.length - 1; i++) {
      if (position.f === direction[direction.length - 1]) {
        lastFace = direction[0];
      }
      if (position.f === direction[i]) {
        lastFace = direction[i + 1];
      }
    }
    setPosition({
      ...position,
      busf: position.busf + 90,
      f: lastFace,
    });
    console.log(position.busf);
  };

  const handleMove = () => {
    if (position.x < 0 || position.x > 4 || position.y < 0 || position.y > 4) {
      alert("Can not go outside!!!");
    }
    switch (position.f) {
      case "north": {
        position.y === 4
          ? alert("Can not go outside!!!")
          : setPosition({
              ...position,
              y: +position.y + 1,
            });
        return { ...position };
      }
      case "south": {
        position.y === 0
          ? alert("Can not go outside!!!")
          : setPosition({
              ...position,
              y: +position.y - 1,
            });
        return { ...position };
      }
      case "east": {
        position.x === 4
          ? alert("Can not go outside!!!")
          : setPosition({
              ...position,
              x: +position.x + 1,
            });
        return { ...position };
      }
      case "west": {
        position.x === 0
          ? alert("Can not go outside!!!")
          : setPosition({
              ...position,
              x: +position.x - 1,
            });
        return { ...position };
      }
      default:
        return { ...position };
    }
  };

  return (
    <div>
      <div className="container row">
        <h4 className="col-12">PLACE</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="positionX"
            placeholder="Enter X"
            name="x"
            onChange={handleOnChange}
            value={position.x}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="positionY"
            placeholder="Enter Y"
            name="y"
            value={position.y}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          {/* <input
            type="text"
            className="form-control"
            id="positionFace"
            placeholder="Enter face"
            name="f"
            value={position.f}
            onChange={handleOnChange}
          /> */}
          <select
            className="form-control"
            name="f"
            value={position.f}
            onChange={handleOnChange}
          >
            <option value="north">north</option>
            <option value="east">east</option>
            <option value="south">south</option>
            <option value="west">west</option>
          </select>
        </div>
      </div>
      <button id="btnLeft" className="btn btn-danger" onClick={handleLeft}>
        Left
      </button>
      <button id="btnMove" className="btn btn-secondary" onClick={handleMove}>
        Move
      </button>
      <button id="btnRight" className="btn btn-danger" onClick={handleRight}>
        Right
      </button>
      <p id="report" />;
      <hr />
      <div className="car-park" style={{ position: "relative" }}>
        <div
          className="bus"
          style={{
            position: "absolute",
            bottom: position.y * 100,
            left: position.x * 100,
            transform: `rotate(${position.busf}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
