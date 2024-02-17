import { getAccUserFulFilled , getAccountRejected , getAccUserPending , increase , decrease , increaseByAmount} from "../actions/actionName";


//Account Reducer
export function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case getAccUserFulFilled:
            return { amount: action.payload, pending: false };
        case getAccountRejected:
            return { ...state, error: action.error, pending: false }
        case getAccUserPending:
            return { ...state, pending: true }
        case increase:
            return { amount: state.amount + 1 }
        case decrease:
            return { amount: state.amount - 1 }
        case increaseByAmount:
            return { amount: state.amount + action.payload }
        default:
            return state;

    }

}