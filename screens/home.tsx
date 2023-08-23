import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/theme";
import { RootStackParamList } from "../navigation/navigation";
import { styled } from "nativewind";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "home">;

const StyledView = styled(View);

export default function HomeScreen(props: HomeScreenProps) {
  const [num, setNum] = useState(1);

  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
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

      <Button
        title="Go article"
        onPress={() => {
          props.navigation.navigate("article");
        }}
      />

      <StatusBar style="auto" />
    </StyledView>
  );
}
