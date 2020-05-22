import React from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";

import Index from "../views/web/home";

export default function Default() {
	return (
		<Switch>
			<Route path="/home" component={Index}/>
		</Switch>
	)
}