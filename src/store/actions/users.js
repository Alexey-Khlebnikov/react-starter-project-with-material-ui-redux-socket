export const UsersActionTypes = {
	"SET_CURRENT_USER": "SET_CURRENT_USER",
}

export const setCurrentUserAction = (newUser) => ({
	type: UsersActionTypes.SET_CURRENT_USER,
	newUser,
})

export default {
	setCurrentUserAction,
};