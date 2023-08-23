import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../navigation/navigation";
import { TextInputDefault } from "../components/input";
import { ButtonFullWidth } from "../components/button";
import { ScrollViewFullWidth, ViewStickyFooter } from "../components/view";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "details">;

export default function DetailsScreen(props: DetailsScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollViewFullWidth>
        {[...Array(10)].map((_, i) => (
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
      </ScrollViewFullWidth>
      <ViewStickyFooter>
        <ButtonFullWidth
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </ViewStickyFooter>
    </SafeAreaView>
  );
}
