import { StyleSheet } from "react-native";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
