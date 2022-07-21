import { goodsAPI } from "../../api/api";

const SET_ITEMS = 'SET_ITEMS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TYPE_CATEGORY = 'TYPE_CATEGORY';

let initialState = {
  items: [],
  isFeatching: false,
  typeCategory: [null],
}


const mainPageReducer = (state = initialState, action) => {
  if (action.type === SET_ITEMS) {
    return { ...state, items: [...action.items] }
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return { ...state, isFeatching: action.isFeatching }
  } else if (action.type === TYPE_CATEGORY) {
    return {
      ...state,
      typeCategory: [...action.itemsWithType]
    }
  }
  return state
}

/*  Action creator  */

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setIsFetching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })
export const setTypeCategory = (itemsWithType) => ({ type: TYPE_CATEGORY, itemsWithType })


/*  Thunk  */
export const getAllItems = () => (dispatch) => {
  dispatch(setIsFetching(true));
  goodsAPI.getAllItems().then((data) => {
    dispatch(setItems([data.data]))
    // dispatch(setIsFetching(false));
  })
}
export const getTypeCategory = () => (dispatch) => {
  goodsAPI.getTypeCategory().then((data) => {
    dispatch(setTypeCategory(data))
  })
}
export const getTypeItems = (type) => (dispatch) => {
  dispatch(setIsFetching(true));
  goodsAPI.getTypeItems(type).then((data) => {
    dispatch(setItems([data.data]))
    // dispatch(setIsFetching(false));
  })
}

export default mainPageReducer