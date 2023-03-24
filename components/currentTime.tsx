import { Center, Text } from "native-base";
import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("");
  var _time;
  useEffect(() => {
    _time = setInterval(() => {
      var hours = new Date().getHours();
      var min = new Date().getMinutes();
      var sec = new Date().getSeconds();

      var timeResult = hours + ":" + min + ":" + sec;
      setTime(timeResult);
    }, 1000);
  });
  return (
    <Center>
      <Text>{time}</Text>
    </Center>
  );
}
