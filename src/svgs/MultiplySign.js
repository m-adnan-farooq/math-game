import React from "react";

export default function MultiplySign() {
  return (
    <div className="svgs">
      <svg viewBox='0 0 100 100'>
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          style={{ stroke: "yellow", strokeWidth: '15', boxShadow:'10px 10px 10px 10px yellow'}}
        />
        <line
          x1="80"
          y1="20"
          x2="20"
          y2="80"
          style={{ stroke: "yellow", strokeWidth: '15' }}
        />
      </svg>
    </div>
  );
}
