import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

import routingHistory from "./app/RoutingHistory";

import App from "./app/App";
import store from "./store";
import theme from "./theme/default";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<ThemeProvider theme={ theme }>
				<Router history={ routingHistory }>
					<Switch>
						<Route path="/" component={ App } />
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
