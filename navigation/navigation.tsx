import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/details";
import HomeScreen from "../screens/home";

// export type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: "latest" | "top" } | undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export type RootStackParamList = {
  home: undefined;
  details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
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
