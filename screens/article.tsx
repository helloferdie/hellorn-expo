import Realm from "realm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../navigation/navigation";
import { useRealm } from "../models/config";
import { TextInputDefault } from "../components/input";
import { ScrollViewFullWidth, ViewStickyFooter } from "../components/view";
import { ButtonFullWidth } from "../components/button";
import { useState } from "react";

type ArticleScreenProps = NativeStackScreenProps<RootStackParamList, "article">;

const initialForm = {
  title: "",
  author: "",
  content: "",
};

export default function ArticleScreen(props: ArticleScreenProps) {
  const realm = useRealm();

  const [form, setForm] = useState(initialForm);

  const handleSaveForm = () => {
    realm.write(() => {
      realm.create("Article", {
        _id: new Realm.BSON.ObjectId(),
        ...form,
      });
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollViewFullWidth style="flex-1">
        <TextInputDefault
          label="Author"
          value={form.author}
          onChangeText={(value) => {
            setForm((prev) => ({ ...prev, author: value }));
          }}
        />
        <TextInputDefault
          label="Title"
          value={form.title}
          onChangeText={(value) => {
            setForm((prev) => ({ ...prev, title: value }));
          }}
        />
        <TextInputDefault
          label="Content"
          value={form.content}
          onChangeText={(value) => {
            setForm((prev) => ({ ...prev, content: value }));
          }}
        />
      </ScrollViewFullWidth>
      <ViewStickyFooter>
        <ButtonFullWidth
          variant="primary"
          label="Save"
          onPress={() => {
            handleSaveForm();
          }}
        />
        <ButtonFullWidth
          variant="outlined"
          label="Go to home"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </ViewStickyFooter>
    </SafeAreaView>
  );
}
