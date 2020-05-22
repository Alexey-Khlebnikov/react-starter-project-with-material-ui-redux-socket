import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../views/web/home";
import Page404 from "../views/errors/Page404";

export default function Default () {
	return (
		<Switch>
			<Route path="/home" component={ Index } />
			<Route path="*" component={ Page404 } />
		</Switch>
	);
}