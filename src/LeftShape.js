import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape(props) {
  return (
    <Group>
      <Line stroke={"green"} strokeWidth={2} points={[247, 243, 151, 243]} />
      <Line stroke={"green"} strokeWidth={2} points={[247, 505, 151, 505]} />
      <Text text={"t2"} x={157} y={359} fontSize={40} />
      <Arrow
        points={[151, 245, 151, 503]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(561, 505);
          context.arc(
            561,
            453 - 105,
            105,
            (90 * Math.PI) / 180,
            (140 * Math.PI) / 180,
            false
          );
          context.lineTo(342, 243);
          context.lineTo(247, 243);
          context.lineTo(247, 360);
          context.lineTo(228, 367);
          context.lineTo(269, 382);
          context.lineTo(247, 390);
          context.lineTo(246, 505);

          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      {/*    Beta2 degree */}
      <Line stroke={"green"} strokeWidth={2} points={[484, 416, 484, 160]} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(342, 243);
          context.quadraticCurveTo(393, 172, 483, 165);
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      <Line stroke={"green"} strokeWidth={2} points={[342, 242, 333, 229]} />
      <Arrow
        points={[330, 250, 342, 243]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[483, 165, 498, 169]}
        pointerAtBeginning={true}
        pointerAtEnding={false}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={366} y={143} text={"β2"} fontSize={40} />
    </Group>
  );
}

export default LeftShape;
