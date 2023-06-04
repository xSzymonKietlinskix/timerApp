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
  const [startValueMin, setStartValueMin] = useState(0);

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
          p={5}
          bg={useColorModeValue("#6495ed", "#daa520")}
        >
          <HStack space={2} alignItems="center" p={5}>
            <Button
              _dark={{ bg: "blueGray.900" }}
              onPress={() => setMinutes(minutes - 1)}
            >
              -
            </Button>
            <Button
              _dark={{ bg: "blueGray.900" }}
              onPress={() => setMinutes(minutes - 5)}
              size={"md"}
            >
              -
            </Button>
            <CircularProgress
              ref={progressRef}
              startInPausedState={false}
              value={0}
              maxValue={startValueMin}
              initialValue={minutes}
              radius={60}
              progressValueColor={"#fff"}
              duration={startValueMin * 60 * 1000}
            />
            <Button
              _dark={{ bg: "blueGray.900" }}
              onPress={() => setMinutes(minutes + 5)}
              size={"md"}
            >
              +
            </Button>
            <Button
              _dark={{ bg: "blueGray.900" }}
              onPress={() => setMinutes(minutes + 1)}
            >
              +
            </Button>
          </HStack>
          <CircularProgress
            ref={progressRef}
            startInPausedState={true}
            value={0}
            maxValue={59}
            initialValue={59}
            radius={40}
            progressValueColor={"#fff"}
            duration={1000 * 59}
          />
          <HStack space={5} justifyContent="center" p={5}>
            <Button
              _dark={{ bg: "blueGray.900" }}
              onPress={() => {
                setStartValue(minutes * 60 + seconds);
                setStartValueMin(minutes);
                progressRef.current.reAnimate();
                setStartTimer(true);
              }}
            >
              Start
            </Button>
            <Button
              _dark={{ bg: "blueGray.900" }}
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
