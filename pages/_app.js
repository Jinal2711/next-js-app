import "../style.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import { createLogger } from "redux-logger";

const loggerMiddleWare = createLogger();
const middlewares = [loggerMiddleWare, thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default App;
