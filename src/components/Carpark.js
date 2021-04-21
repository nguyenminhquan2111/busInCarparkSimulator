import React from "react";
import bus from "../bus-top-view.png";

export default function Carpark(props) {
  const { position } = props;
  return (
    <div className="car-park" style={{ position: "relative" }}>
      <div
        className="bus"
        style={{
          position: "absolute",
          bottom: position.y * 100,
          left: position.x * 100,
          transform: `rotate(${position.busf}deg)`,
        }}
      >
        <img src={bus} alt="bus" />
      </div>
    </div>
  );
}
