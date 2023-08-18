import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type RootStackParamList = {
  home: undefined;
  details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "home">;

function HomeScreen(props: HomeScreenProps) {
  const [num, setNum] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text>Hello</Text>

      <Text>{num}</Text>

      <Button
        title="Click Me"
        onPress={() => {
          setNum((prev) => prev + 1);
        }}
      />

      <Button
        title="Reduce Me"
        onPress={() => {
          setNum((prev) => prev - 1);
        }}
      />

      <Button
        title="Go to Details 2"
        onPress={() => {
          props.navigation.navigate("details", { itemId: 2 });
        }}
      />

      <Button
        title="Go to Details 10"
        onPress={() => {
          props.navigation.navigate("details", { itemId: 10 });
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "details">;

function DetailsScreen(props: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{props.route.params.itemId}</Text>

      <Button
        title="Go to home"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Beranda", headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={DetailsScreen}
          options={{ title: "Details", animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
