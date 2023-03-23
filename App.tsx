import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./components/appContainer";
import TimerScreen from "./screens/timerScreen";

export default function App() {
  return (
    <AppContainer>
      <TimerScreen />
    </AppContainer>
  );
}
