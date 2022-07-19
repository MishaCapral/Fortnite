import { goodsAPI } from "../../api/api";

const SET_ITEMS = 'SET_ITEMS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  items: [],
  isFeatching: false,
}
window.state = initialState

const mainPageReducer = (state = initialState, action) => {
  if (action.type === SET_ITEMS) {
    return { ...state, items: [...action.items] }
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return { ...state, isFeatching: action.isFeatching }
  }
  return state
}

/*  Action creator  */

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setIsFetching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })


/*  Thunk  */
export const getItems = () => (dispatch) => {
  dispatch(setIsFetching(true));
  goodsAPI.getAllItems().then((data) => {
    dispatch(setItems([data.data]))
    // dispatch(setIsFetching(false));
  })


}
export default mainPageReducer