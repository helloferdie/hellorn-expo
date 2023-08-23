import { ScrollView, View } from "react-native";
import styles from "../styles/theme";

interface ViewProps {
  style?: string;
  children: React.ReactNode;
}

export function ScrollViewFullWidth(props: ViewProps) {
  return (
    <ScrollView className={`${styles.view.fullWidth} ${props.style}`}>
      {props.children}
      <View className="h-2"></View>
    </ScrollView>
  );
}

export function ViewStickyFooter(props: ViewProps) {
  return (
    <View className={`${styles.view.fullWidth} ${props.style}`}>
      {props.children}
    </View>
  );
}
