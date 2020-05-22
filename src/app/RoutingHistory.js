import { createBrowserHistory } from "history";
// import store from "redux/store/index"
//
// import { putState } from "redux/actions/index";

const routingHistory = createBrowserHistory({
	/* pass a configuration object here if needed */
});

routingHistory.listen(location => {
	if (location.pathname !== "/" || location.pathname !== "/chart") {
		// store.dispatch(putState(false, "isOpenOverview"));
	}
});

export default routingHistory;