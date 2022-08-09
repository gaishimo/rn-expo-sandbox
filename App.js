import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <WithSkiaWeb
      getComponent={() => import("./SkiaComponent")}
      fallback={<Text>Loading Skia...</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
