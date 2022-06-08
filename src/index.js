import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-todo-graphql23.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
});

const root = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  root
);
