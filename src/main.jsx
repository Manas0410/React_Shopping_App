import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NavigationView from "./Navigation/Navigation.Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NavigationView />
  </Provider>
);
