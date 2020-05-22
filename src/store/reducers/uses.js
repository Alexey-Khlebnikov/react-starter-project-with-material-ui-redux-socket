import { UsersActionTypes } from "../actions/users";

const initState = {
	currentUser: null,
};

export default (state = initState, action) => {
	switch (action.type) {
		case UsersActionTypes.SET_CURRENT_USER:
			return Object.assign({ ...state, currentUser: action.newUser });
		default:
			return state;
	}
}