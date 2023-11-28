import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import NavigationView from "./Navigation/Navigation.Layout";
import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store";
// import persistor from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationView />
    </PersistGate>
  </Provider>
);
