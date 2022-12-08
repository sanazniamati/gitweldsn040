import { Stage, Layer, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";

export default function Asymmetric_U_Butt() {
  const url = "asymmetric U-butt.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  //Right Shape
  const [r, setR] = useState(105);
  const [c, setC] = useState(503 - 455);
  const [y1t1, setY1t1] = useState(243);
  const [beta1, setBeta1] = useState(25);
  let t1 = 505 - y1t1;
  let initiala = 10 * Math.cos((beta1 * Math.PI) / 180);
  const x1AdditinalLine =
    (t1 - r - c) * Math.tan((beta1 * Math.PI) / 180) + 656;
  let x2AdditinalLine =
    x1AdditinalLine + 48 * Math.tan((beta1 * Math.PI) / 180);

  const handelIncR = () => {
    setR(r + 5);
    setC(c + 5);
    console.log("r" + r);
  };
  const handelDecR = () => {
    setR(r - 5);
    setC(c - 5);
    console.log("r" + r);
  };
  const handelIncC = () => {
    setC(c + 5);
  };
  const handelDecC = () => {
    setC(c - 5);
  };

  const handelIncBeta1 = () => {
    setBeta1(beta1 + 5);
    console.log("x2AdditinalLine" + x2AdditinalLine);
    console.log("x1AdditinalLine" + x1AdditinalLine);
  };
  const handelDecBeta1 = () => {
    setBeta1(beta1 - 5);
  };
  return (
    <>
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelDecR}> R - </button>
      <button onClick={handelIncC}>C + </button>
      <button onClick={handelDecC}>C - </button>
      <button onClick={handelIncBeta1}>β1 + </button>
      <button onClick={handelDecBeta1}>β1 - </button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={170} y={12} image={image} />*/}
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape />
          <RightShape
            r={r}
            c={c}
            y1t1={y1t1}
            x1AdditinalLine={x1AdditinalLine}
            x2AdditinalLine={x2AdditinalLine}
            initiala={initiala}
          />
          <BottomShape />
        </Layer>
      </Stage>
    </>
  );
}
