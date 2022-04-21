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
