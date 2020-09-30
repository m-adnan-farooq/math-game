import React from "react";

export default function PlusSign() {
  return (
    <div className="svgs">
      <svg viewBox='0 0 100 100'>
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          style={{ stroke: "yellow", strokeWidth: '15', boxShadow:'10px 10px 10px 10px yellow'}}
        />
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          style={{ stroke: "yellow", strokeWidth: '15' }}
        />
      </svg>
    </div>
  );
}
