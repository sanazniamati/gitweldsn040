import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({
  r,
  c,
  y1t1,
  x1AdditinalLine,
  x2AdditinalLine,
  initiala,
}) {
  return (
    <Group>
      <Line stroke={"green"} strokeWidth={2} points={[897, 243, 998, 243]} />
      <Line stroke={"green"} strokeWidth={2} points={[897, 505, 998, 505]} />
      <Arrow
        points={[998, 246, 998, 501]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"t1"} x={1007} y={370} fontSize={40} />
      {/*  c */}
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[584, 503 - c, 960, 503 - c]}
      />
      <Arrow
        points={[937, 503 - c + 3, 937, 505]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"C"} x={910} y={470} fontSize={30} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(x1AdditinalLine, y1t1);
          context.lineTo(897, y1t1);
          context.lineTo(897, 361);
          context.lineTo(875, 367);
          context.lineTo(918, 380);
          context.lineTo(897, 387);
          context.lineTo(897, 505);
          context.lineTo(584, 505);
          context.arc(584, 503 - c - r, r, (90 * Math.PI) / 180, 0, true);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      {/*Beta 1*/}
      {/*  additinal line*/}
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[x1AdditinalLine, 243, x2AdditinalLine, 160 + initiala]}
      />
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[583 + r, 503 - c - r, 583 + r, 162]}
      />
      <Text x={701} y={129} text={"β1"} fontSize={30} fontStyle={"bold"} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(x2AdditinalLine, 169);
          context.quadraticCurveTo(
            (689 + x2AdditinalLine) / 2,
            150,
            583 + r,
            166
          );
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      <Arrow
        points={[x2AdditinalLine, 169, x2AdditinalLine + 15, 173]}
        pointerAtBeginning={true}
        pointerAtEnding={false}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[583 + r - 15, 169, 583 + r, 166]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />

      {/*  R*/}
      <Arrow
        points={[583, 503 - c - r, 656, 422]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <TextPath
        x={596}
        y={503 - c - r}
        fill={"#333"}
        text={"R"}
        data={"M 0 0 L 300 320 "}
        fontSize={30}
      />
    </Group>
  );
}

export default RightShape;
