import { ConfigPlugin } from "@expo/config-plugins"

type Props = { name: string }

export const withExample: ConfigPlugin<Props> = (config, props) => {
  config.name = props.name
  return config
}
