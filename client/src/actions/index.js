
export const limitchange = (num) => {
    return {
        type: 'CHANGE_LIMIT',
        payload: num
    }
}

export const userchange = (data) => {
    return {
        type: 'CHANGE_USER',
        payload: data
    }
}

// export const decNumber = () => {
//     return {
//         type: 'DECREMENT'
//     }
// };