import * as React from "react";
import { useEffect, useState,  } from "react";
import {
    Text,
    Box,
    Center,
    VStack,
    HStack,
    Button,
    useColorModeValue,
  } from "native-base";


const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time : number) => {
    const mins = Math.floor(time /60);
    const secs = time - mins * 60;
    return {mins: formatNumber(mins), secs: formatNumber(secs)};
}

export default function TimerScreen() {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const {mins, secs} = getRemaining(remainingSecs);

    let toggle = () => {
        setIsActive(!isActive);
    }

    let reset = () => {
        setIsActive(false);
        setRemainingSecs(0);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
        }, 1000);
    }
    else if(!isActive && remainingSecs !== 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [isActive, remainingSecs])
    return(
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
        <Text fontSize={90} color={"blueGray.900"}>{`${mins}:${secs}`}</Text>
        <HStack space={5} justifyContent="center" p={5}>
          <Button
            _dark={{ bg: "blueGray.900" }}
            size={"lg"}
            onPress={toggle}
          >
            Start
          </Button>
          <Button
            _dark={{ bg: "blueGray.900" }}
            size={"lg"}
            onPress={reset}
          >
            Reset
          </Button>
        </HStack>
      </Box>
    </VStack>
  </Center>
);
}
