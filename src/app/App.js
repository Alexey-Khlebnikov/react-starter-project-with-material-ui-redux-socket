import React from "react";

import Default from "../layout/Default";
import Mobile from "../layout/Mobile";

function App () {
	const isMobile = false;
	return (
		isMobile ? <Mobile/> : <Default/>
	);
}

export default App;
