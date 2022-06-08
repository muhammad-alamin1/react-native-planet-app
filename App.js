import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
import { typoGraphy } from "./src/theme/typography";
import Text from "./src/components/text/text";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Antonio': require('./assets/fonts/Antonio-ExtraLight.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-ExtraBold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Font is Loading</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: typoGraphy.primaryBold, fontSize: spacing[5]}}>Open up App.js to start working on your app!</Text>
      <Text preset="h2">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
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
