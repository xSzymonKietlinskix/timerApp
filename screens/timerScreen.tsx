import * as React from "react";
import { useEffect, useState, useRef } from "react";
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
import CircularProgress, {
  ProgressRef,
} from "react-native-circular-progress-indicator";
import ThemeToggle from "../components/themeToggle";

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const progressRef = useRef<ProgressRef>(null);

  var timer;
  useEffect(() => {
    if (startTimer) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds === 0) {
          if (minutes === 0) {
            setStartTimer(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  var test = minutes.toString() + ":" + seconds.toString();
  const [startValue, setStartValue] = useState(0);

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
          <HStack space={5} alignItems="center" p={5}>
            <Button
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => setMinutes(minutes - 1)}
            >
              -
            </Button>
            <Text fontSize={"md"}>
              {minutes}:{seconds}
            </Text>
            <Button
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => setMinutes(minutes + 1)}
            >
              +
            </Button>
          </HStack>
          <CircularProgress
            ref={progressRef}
            startInPausedState={true}
            value={0}
            radius={120}
            maxValue={1000}
            initialValue={startValue}
            progressValueColor={"#fff"}
            activeStrokeWidth={15}
            inActiveStrokeWidth={15}
            duration={startValue * 1000}
            onAnimationComplete={() => alert("time out")}
          />
          <HStack space={5} justifyContent="center" p={5}>
            <Button
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => {
                setStartValue(minutes * 60 + seconds);
                progressRef.current.reAnimate();
                setStartTimer(true);
              }}
            >
              Start
            </Button>
            <Button
              colorScheme="dark"
              p={2}
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => {
                setSeconds(0), setMinutes(0);
                progressRef.current.pause();
                setStartTimer(false);
              }}
            >
              Reset
            </Button>
            <Button
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.900" }}
              size="sm"
              onPress={() => {
                clearInterval(timer);
                progressRef.current.pause();
                setStartTimer(false);
              }}
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
