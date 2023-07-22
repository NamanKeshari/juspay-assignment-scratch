import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { Button } from "native-base";
import { useEffect } from "react";
import userAtom from "../../atoms/user.atom";
import { useAtom } from "jotai";
import Header from "./Header";
import AppLayout from "../../layouts/AppLayout";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    setUser({ firstName: "Naman", lastName: "Keshari" });
  }, []);

  return (
    <AppLayout>
      <Header />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Hi {`${user?.firstName} ${user?.lastName}`}! Let's do this!</Text>
        <Button
          children="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <StatusBar style="auto" />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
