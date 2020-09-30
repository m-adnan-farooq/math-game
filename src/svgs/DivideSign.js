import React from "react";

export default function DivideSign() {
  return (
    <div className="svgs">
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="25"
          r="10"
          stroke="yellow"
          stroke-width="3"
          fill="yellow"
        />
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          style={{ stroke: "yellow", strokeWidth: "15" }}
        />
        <circle
          cx="50"
          cy="75"
          r="10"
          stroke="yellow"
          stroke-width="3"
          fill="yellow"
        />
      </svg>
    </div>
  );
}
