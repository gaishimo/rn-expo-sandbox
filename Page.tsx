import { StyleSheet, View } from "react-native"
import { Text } from "./Text"

export function Page() {
  return (
    <View style={styles.page}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {[
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "normal",
          "bold",
        ].map(weight => (
          <Text
            key={weight}
            style={{ fontSize: 16, fontWeight: weight as any }}
          >
            {weight}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, alignItems: "center", justifyContent: "center" },
})
