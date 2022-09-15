import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web"
import { Text, View } from "react-native"

export function Page() {
  return (
    <View style={{ alignItems: "center" }}>
      {[...Array(8).keys()].map(i => (
        <WithSkiaWeb
          key={i}
          getComponent={() => import("./SkiaComponent")}
          fallback={<Text>Loading Skia...</Text>}
        />
      ))}
    </View>
  )
}
