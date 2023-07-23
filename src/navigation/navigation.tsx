import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home";
import ProgramScreen from "../screens/program/Program";
import AnimationsScreen from "../screens/animations/Animations";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Animations"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Program" component={ProgramScreen} />
      <Stack.Screen name="Animations" component={AnimationsScreen} />
    </Stack.Navigator>
  );
}
