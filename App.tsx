import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./components/appContainer";
import TimerScreen from "./screens/timerScreen";
import Navigator from "./navigation";

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}
