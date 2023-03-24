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
  ZStack,
  Stack,
  Divider,
  ScrollView,
  Heading,
} from "native-base";

import CurrentTime from "../components/currentTime";

function getDate() {
  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var dateResult = day + "/" + month + "/" + year;
  return dateResult;
}

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

export default function HomeScreen() {
  const name = "Szymon";

  return (
    <ScrollView>
      <VStack space="2.5" mt="4" px="8">
        <Heading size="md">row</Heading>
        <Stack direction="row" mb="2" mt="1.5" space={3}>
          <Center
            size="xl"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Welcome {name}!
          </Center>
          <Center
            bg="primary.500"
            size="xl"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Today is{" "}
            {new Date().toLocaleDateString("en-us", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Center>
        </Stack>
        <Divider />
        <Heading size="md">column</Heading>
        <Stack mb="2.5" mt="1.5" direction="column" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 1
          </Center>
          <Center
            bg="primary.500"
            size="16"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="primary.700"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
        <Heading size="md">row-reverse</Heading>
        <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 1
          </Center>
          <Center
            bg="primary.500"
            size="16"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="primary.700"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
        <Heading size="md">column-reverse</Heading>
        <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 1
          </Center>
          <Center
            bg="primary.500"
            size="16"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="primary.700"
            rounded="sm"
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
      </VStack>
    </ScrollView>
  );
}
