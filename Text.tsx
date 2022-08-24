import { ComponentProps } from "react"
import { StyleProp, StyleSheet, Text as RnText, TextStyle } from "react-native"

/**
 * フォント設定をしたText
 * 基本的にReact Nativeのフォントを使わずにこのフォントを利用
 * @param props
 * @returns
 */
export function Text(props: ComponentProps<typeof RnText>) {
  return <RnText {...props} style={withFontFamilyStyle(props.style)} />
}

const FONT_MAPPING: { [key in TextStyle["fontWeight"]]: string } = {
  "100": "NotoSansJPThin",
  "200": "NotoSansJPLight",
  "300": "NotoSansJPLight",
  "400": "NotoSansJPRegular",
  "500": "NotoSansJPMedium",
  "600": "NotoSansJPMedium",
  "700": "NotoSansJPBold",
  "800": "NotoSansJPBlack",
  "900": "NotoSansJPBlack",
  normal: "NotoSansJPRegular",
  bold: "NotoSansJPBold",
}

function withFontFamilyStyle(
  style: StyleProp<TextStyle>,
): StyleProp<TextStyle> {
  if (style == null) return style
  const flattened = StyleSheet.flatten(style)
  const fontWeight = flattened?.fontWeight
  if (fontWeight == null) return style

  const fontFamily = FONT_MAPPING[fontWeight]
  if (fontFamily == null) return style

  return [style, { fontFamily }]
}
