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
      <ScrollViewFullWidth style="flex-1">
        {[...Array(10)].map((_, i) => (
          <TextInputDefault key={i} label="My first name" value="" />
        ))}

        <TextInputDefault label="My first name" value="" />

        <ButtonFullWidth
          variant="primary"
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />

        <ButtonFullWidth
          variant="primary"
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </ScrollViewFullWidth>
      <ViewStickyFooter>
        <ButtonFullWidth
          variant="primary"
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </ViewStickyFooter>
    </SafeAreaView>
  );
}
