import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/srceens/home";
import Details from "./src/srceens/details";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Antonio: require("./assets/fonts/Antonio-ExtraLight.ttf"),
    "Spartan-Bold": require("./assets/fonts/LeagueSpartan-ExtraBold.ttf"),
    "Spartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Font is Loading</Text>;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
