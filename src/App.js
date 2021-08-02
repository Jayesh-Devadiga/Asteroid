import React from "react";
import { Provider } from "react-redux";
import PageContent from "./components/PageContent";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PageContent />
    </Provider>
  );
};

export default App;
