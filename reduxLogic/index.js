import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const increase = 'account/increase'
const decrease = 'account/decrease'
const increaseByAmount = 'account/increaseByAmount'
const getAccUserPending = 'account/getUser/pending'
const getAccUserFulFilled = 'account/getUser/fulfulled'
const getAccUserRejected = 'account/getUser/rejected'
const incBonus = 'bonus/increment'

const store = createStore(combineReducers({
    accountReducer,
    bonusReducer
}), applyMiddleware(logger.default, thunk))


//REDUCERS

function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFulFilled:
            return { amount: action.payload, pending: false };
        case getAccUserRejected:
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

function bonusReducer(state = { bonus: 0 }, action) {
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



//ACTION CREATORS
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending())
            const data = fetchFunction();
            dispatch(getAccountUserFulFilled(data.amount))

        }
        catch (error) {
            dispatch(getAccountRejected(error))
        }
    }

}


function getAccountUserPending() {
    return { type: getAccUserPending }
}

function getAccountUserFulFilled(value) {
    return { type: getAccUserFulFilled, payload: value }
}

function getAccountRejected(error) {
    return { type: getAccountRejected, error: error }
}

function increment() {
    return { type: inc };
}
function decrement() {
    return { type: dec };
}
function incrementByAmount(value) {
    return { type: incByAmt, payload: value };
}
function incrementBonus(value) {
    return { type: incBonus };
}


//fetch function

const fetchFunction = async () => {
    const response = await fetch('http://localhost:3000/account')
    const data = await response.json()
    return data;
}

// store.dispatch(getUserAccount(1))
console.log(store.getState())



