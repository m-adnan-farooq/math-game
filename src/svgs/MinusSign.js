import React from "react";

export default function MinusSign() {
  return (
    <div className="svgs">
      <svg viewBox='0 0 100 100'>
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          style={{ stroke: "yellow", strokeWidth: '15'}}
        />
        {/* <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          style={{ stroke: "yellowgreen", strokeWidth: '20' }}
        /> */}
      </svg>
    </div>
  );
}
