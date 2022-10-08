import { ConfigPlugin } from "@expo/config-plugins"
import { withExample } from "./withExample"

const withPlugins: ConfigPlugin = config => {
  config = withExample(config, { name: "hello" })
  return config
}

export default withPlugins
