import { users, validUSer } from "../DataEmployee";

const initialState = { user: {}, users, validUser: validUSer };
export const CurrentUser = 'CURRENT USER';
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case CurrentUser:
            let user = action.user;
            let { username, password } = state.validUser
            if (username === user.username && password === user.password) {
                return { ...state, loggedIn: true }
            } else return { ...state }

        default:
            return state;
            break;
    }
}