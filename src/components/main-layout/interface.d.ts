import React from "react";
import type { GestureResponderEvent, ImageSourcePropType } from "react-native";

export interface MainLayoutI {
  headerTitle: string
  leftIcon?: ImageSourcePropType | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children?: JSX.Element;
}