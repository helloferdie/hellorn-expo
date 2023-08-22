import { Pressable, Text } from "react-native";

export function ButtonFullWidth(props: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className="py-2 px-4 mb-2 border-transparent rounded-lg shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
