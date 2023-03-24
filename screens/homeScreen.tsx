import * as React from "react";
import { useState } from "react";

import {
  Text,
  Box,
  Center,
  VStack,
  HStack,
  Button,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from "native-base";

import CurrentDate from "../components/currentDate";
export default function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.100" }}
      px={4}
      flex={1}
    >
      <Box
        alignItems="center"
        rounded="md"
        p={10}
        bg={useColorModeValue("#6495ed", "#daa520")}
      >
        <CurrentDate />
      </Box>
    </Center>
  );
}
