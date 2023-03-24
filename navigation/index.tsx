import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimerScreen from "../screens/timerScreen";
import HomeScreen from "../screens/homeScreen";
import ThemeToggle from "../components/themeToggle";
import { useColorModeValue } from "native-base";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: useColorModeValue("#6495ed", "#daa520"),
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Timer" component={TimerScreen} />
        <Drawer.Screen name="Theme" component={ThemeToggle} />
      </Stack.Group>
    </Drawer.Navigator>
  );
};

export default App;
