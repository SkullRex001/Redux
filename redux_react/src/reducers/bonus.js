import { incBonus, increaseByAmount } from "../actions/actionName";
// bonus reducer
export function bonusReducer(state = { bonus: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { bonus: state.bonus + 1 };
        case increaseByAmount:
            if (action.payload >= 100) {
                return { bonus: state.bonus = 1 } //if user deposite money >= 100, give them bonus of 1 point
            }
        default:
            return state

    }
}

