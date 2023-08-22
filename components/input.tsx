import { Text, TextInput, View } from "react-native";
import { ViewFullWidth } from "./view";

export function TextInputDefault(props: { label: string }) {
  return (
    <View className="mb-4">
      <Text className="font-medium">{props.label}</Text>
      <TextInput
        className="mt-2 rounded-md py-2 px-3 border border-gray-400 bg-white  focus:border-2 focus:border-indigo-600"
        placeholder="Example"
      />
    </View>
  );
}
