import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./App";
import { Provider } from 'react-redux';
import { name as appName } from "./app.json";



// AppRegistry.registerComponent(appName, () => App);
export default function Main() {
  return (
      <App />
  );
}
