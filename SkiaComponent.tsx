import { Canvas, Circle } from "@shopify/react-native-skia"
import { useCallback, useState } from "react"
import { Button, Text, View } from "react-native"

export default function SkiaComponent() {
  const [radius, setRadius] = useState(50)
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Canvas style={{ width: 300, height: 300 }}>
        <Circle
          cx={150}
          cy={150}
          r={radius}
          style="fill"
          color="lightblue"
          key={radius}
        />
      </Canvas>
      <View>
        <Text>radius: {radius}</Text>
      </View>
      <View style={{ marginTop: 80, width: 100 }}>
        <Button
          title="Change Size"
          onPress={useCallback(() => {
            setRadius(Math.random() * 100)
          }, [])}
        />
      </View>
    </View>
  )
}
