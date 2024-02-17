//action namess
export const increase = 'account/increase'
export const decrease = 'account/decrease'
export const increaseByAmount = 'account/increaseByAmount'
export const getAccUserPending = 'account/getUser/pending'
export const getAccUserFulFilled = 'account/getUser'
export const incBonus = 'bonus/increment'

//ACTION CREATORS
export function getUserAccount(id) {
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


export function getAccountUserPending() {
    return { type: getAccUserPending }
}

export function getAccountUserFulFilled(value) {
    return { type: getAccUserFulFilled, payload: value }
}

export function getAccountRejected(error) {
    return { type: getAccountRejected, error: error }
}

export function increment() {
    return { type: increase };
}
export function decrement() {
    return { type: decrease };
}
export function incrementByAmount(value) {
    return { type: increaseByAmount, payload: value };
}
export function incrementBonus() {
    return { type: incBonus };
}
