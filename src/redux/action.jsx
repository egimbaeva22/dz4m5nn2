import axios from 'axios'

export const postData = (data) => {

  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
      if (response.status >= 200 || response.status <= 204) {
        console.log('YEAAAAAAH!!!!!!!!')
      }
      else if (response.status === 404) {
        console.log('NOOOO!!!!!!!!!')
      }
      dispatch({ type: 'POST_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'POST_ERROR', payload: error.message })
    }
  }
}
