import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/Home";
import ProfileScreen from "../screens/profile/Profile";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
