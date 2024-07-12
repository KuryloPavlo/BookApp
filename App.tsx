import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}
