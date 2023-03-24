import { Button, Center, Text } from "native-base";
import { useState, useEffect } from "react";

export default function CurrentDate() {
  const [date, setDateTime] = useState("XD");
  var test;
  useEffect(() => {
    test = setInterval(() => {
      var day = new Date().getDate();

      //Get Current Month
      var month = new Date().getMonth() + 1;

      //Get Current Year
      var year = new Date().getFullYear();

      //Get Current Time Hours
      var hours = new Date().getHours();

      //Get Current Time Minutes
      var min = new Date().getMinutes();

      //Get Current Time Seconds
      var sec = new Date().getSeconds();

      var dateResult =
        day + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec;
      setDateTime(dateResult);
    }, 1000);
  });
  return (
    <Center>
      <Text>{date}</Text>
    </Center>
  );
}
