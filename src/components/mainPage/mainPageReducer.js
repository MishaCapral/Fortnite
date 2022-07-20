import { goodsAPI } from "../../api/api";

const SET_ITEMS = 'SET_ITEMS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
//const TYPE_ITEMS = 'TYPE_ITEMS';

let initialState = {
  items: [],
  isFeatching: false,
  typeItems: 'banner',
}


const mainPageReducer = (state = initialState, action) => {
  if (action.type === SET_ITEMS) {
    return { ...state, items: [...action.items] }
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return { ...state, isFeatching: action.isFeatching }
  }
  //  else if (action.type === TYPE_ITEMS) {
  //   return { ...state, typeItems: [...action.typeItems] }
  // }
  return state
}

/*  Action creator  */

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setIsFetching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })
//export const setTypeItems = (typeItems) => ({ type: TYPE_ITEMS, typeItems })



/*  Thunk  */
export const getAllItems = () => (dispatch) => {
  dispatch(setIsFetching(true));
  goodsAPI.getAllItems().then((data) => {
    dispatch(setItems([data.data]))
    // dispatch(setIsFetching(false));
  })
}
export const getTypeItems = (type) => (dispatch) => {
  dispatch(setIsFetching(true));
  goodsAPI.getTypeItems(type).then((data) => {
    dispatch(setItems([data.data]))
    // dispatch(setIsFetching(false));
  })
}

console.log(initialState)
export default mainPageReducer