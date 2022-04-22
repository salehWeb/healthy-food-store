import * as api from '../api'

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.getCard()
        console.log(data)
        dispatch({ type: 'first', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const PostData = (form) => async (dispatch) => {
    try {
        const { data } = await api.PostData(form)
        console.log(data)
        dispatch({ type: 'second', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getCartWith_ID = (ids) => async (dispatch) => {
    try {
        const { data } = await api.getCartWith_ID(ids)
        console.log(data)
        dispatch({ type: 'get', payload: data })
    } catch (error) {
        console.log(error)
    }
}
