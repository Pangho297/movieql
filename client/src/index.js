import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./components/App";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
