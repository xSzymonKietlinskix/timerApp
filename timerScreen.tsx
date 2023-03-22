import * as React from "react";
import { useEffect, useState } from "react";
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
import ThemeToggle from "./theme-toggle";

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.100" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box
          alignItems="center"
          rounded="md"
          p={10}
          bg={useColorModeValue("blue.400", "yellow.500")}
        >
          <Text p={5} fontSize="3xl">
            {minutes}:{seconds}
          </Text>
          <HStack space={5} justifyContent="center">
            <Button
              colorScheme="dark"
              p={2}
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => (setSeconds(0), setMinutes(0))}
            >
              Reset
            </Button>
            <Button
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => clearInterval(timer)}
            >
              Stop
            </Button>
          </HStack>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
