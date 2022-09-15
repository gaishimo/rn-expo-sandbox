import { Canvas, Circle } from "@shopify/react-native-skia"

export default function SkiaComponent() {
  // const path = Skia.Path.Make()
  // path.moveTo(5, 5)
  // path.lineTo(50, 5)
  return (
    <Canvas style={{ width: 100, height: 50 }}>
      {/* <Path path={path} style="stroke" strokeWidth={2} color="lightblue" /> */}
      <Circle cx={10} cy={10} r={10} color="lightblue" />
    </Canvas>
  )
}
