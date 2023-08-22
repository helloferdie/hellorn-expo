import { ScrollView, View } from "react-native";

export function ViewFullWidth(props: {
  style?: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollView className={`w-full py-4 px-4 ${props.style}`}>
      {props.children}
    </ScrollView>
  );
}
