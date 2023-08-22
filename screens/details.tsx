import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { RootStackParamList } from "../navigation/navigation";
import { TextInputDefault } from "../components/input";
import { ViewFullWidth } from "../components/view";
import { ButtonFullWidth } from "../components/button";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "details">;

function MyButton(props: { label: string; onPress?: () => void }) {
  return (
    <Pressable
      //className="mt-2 py-2 px-4 border-transparent rounded-lg shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      className="py-2 px-4 border-transparent rounded-lg shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onPress={() => {
        props.onPress?.();
      }}
    >
      <Text className="font-semibold text-center text-white text-base">
        {props.label}
      </Text>
    </Pressable>
  );
}

export default function DetailsScreen(props: DetailsScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ViewFullWidth style="flex-1">
        {[...Array(10)].map((x, i) => (
          <TextInputDefault key={i} label="My first name" />
        ))}

        <TextInputDefault label="My first name" />

        <ButtonFullWidth
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />

        <ButtonFullWidth
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </ViewFullWidth>
    </SafeAreaView>
    // <View className="flex-1 items-center bg-white">
    //   <TextInputDefault label="My first name" />
    //   <TextInputDefault label="My last name" />

    //   <ButtonFullWidth
    //     label="Go to home"
    //     onPress={() => {
    //       props.navigation.goBack();
    //     }}
    //   />

    //   <ButtonFullWidth
    //     label="Go to home"
    //     onPress={() => {
    //       props.navigation.goBack();
    //     }}
    //   />
    // </View>
  );
}
