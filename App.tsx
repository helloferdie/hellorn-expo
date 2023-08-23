import Realm from "realm";

import { RealmProvider } from "./models/config";
import Navigation from "./navigation/navigation";

export default function App() {
  return (
    <RealmProvider>
      <Navigation />
    </RealmProvider>
  );
}
