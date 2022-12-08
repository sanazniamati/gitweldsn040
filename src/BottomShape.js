import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function BottomShape() {
  return (
    <Group>
      <Line stroke={"green"} strokeWidth={2} points={[561, 505, 561, 603]} />
      <Line stroke={"green"} strokeWidth={2} points={[584, 505, 584, 603]} />
      <Text x={566} y={620} text={"b"} fontSize={40} />
      <Arrow
        points={[563, 603, 581, 603]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
    </Group>
  );
}

export default BottomShape;
