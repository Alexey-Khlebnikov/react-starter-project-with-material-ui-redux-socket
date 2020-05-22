import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector } from "../../../store/selectors/users";
import { setCurrentUserAction } from "../../../store/actions/users";

export default function Index () {
	const currentUser = useSelector(currentUserSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => {
			dispatch(setCurrentUserAction({
				name: "Hong do",
			}));
		}, 3000);
	}, []);
	return (
		currentUser
			? <div>Welcome {currentUser.name}</div>
			: <div>Home</div>
	);
}