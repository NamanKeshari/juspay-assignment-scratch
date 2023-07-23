import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home";
import ProgramScreen from "../screens/program/Program";
import DraggableScreen from "../screens/draggable/Draggable";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Program" component={ProgramScreen} />
      <Stack.Screen name="Draggable" component={DraggableScreen} />
    </Stack.Navigator>
  );
}
