import React from "react";

export default function Report(props) {
  const { position } = props;
  return (
    <p id="report">
      REPORT: {position.x}; {position.y}; {position.f}
    </p>
  );
}
