import { Canvas, Path, Skia } from "@shopify/react-native-skia"

export default function SkiaComponent() {
  const path = Skia.Path.Make()
  const arcRect = {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
  }
  path.addArc(arcRect, 45, 270)

  return (
    <Canvas style={{ flex: 1 }}>
      <Path path={path} color="lightblue" style="stroke" strokeWidth={2} />
    </Canvas>
  )
}
