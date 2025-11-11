import React from "react";

const CircleLayout = ({ items = 10, radius = 120 }) => {
  // Generate item angles
  const angleStep = 360 / items;

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* Outer connecting circle */}
      <div
        className="absolute border border-gray-400 rounded-full"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      ></div>

      {/* Circle items */}
      {Array.from({ length: items }).map((_, i) => {
        const angle = i * angleStep;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={i}
            className="absolute flex items-center justify-center w-14 h-14 bg-gray-400 rounded-full text-white font-semibold"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default CircleLayout;
