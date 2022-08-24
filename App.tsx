import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Page } from "./Page"

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansJPRegular: require("./assets/fonts/NotoSansJP-Regular.otf"),
    NotoSansJPBold: require("./assets/fonts/NotoSansJP-Bold.otf"),
    NotoSansJPBlack: require("./assets/fonts/NotoSansJP-Black.otf"),
    NotoSansJPThin: require("./assets/fonts/NotoSansJP-Thin.otf"),
    NotoSansJPMedium: require("./assets/fonts/NotoSansJP-Medium.otf"),
    NotoSansJPLight: require("./assets/fonts/NotoSansJP-Light.otf"),
  })

  console.log("fontsLoaded:", fontsLoaded)

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Page />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
