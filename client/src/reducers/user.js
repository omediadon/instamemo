import { GET_USER } from "../constants/actionTypes";

const user = (state = {user:[]}, action) => {
    switch (action.type) {
        case GET_USER:
        return action.payload;
        case "FOLLOW":
            return [...state, action.payload];
        case "UNFOLLOW":
            return state.filter(user => user._id !== action.payload._id);
        default:
        return state;
    }
    }

    export default user;