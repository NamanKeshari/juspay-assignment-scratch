import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home";
import ProgramScreen from "../screens/program/Program";
import TestScreen from "../components/TestingDrag";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Program" component={ProgramScreen} />
      <Stack.Screen name="DragAndDrop" component={TestScreen} />
    </Stack.Navigator>
  );
}
