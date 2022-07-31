import { goodsAPI } from "../../api/api";

const TYPE_CATEGORY = 'TYPE_CATEGORY';

let initialState = {
  typeCategory: ['banner', 'backpack', 'petcarrier', 'pet', 'pickaxe', 'outfit', 'contrail', 'glider', 'emote', 'emoji', 'loadingscreen', 'music', 'spray', 'toy', 'wrap'],
}


const mainPageReducer = (state = initialState, action) => {
  if (action.type === TYPE_CATEGORY) {
    return {
      ...state,
      typeCategory: [...action.itemsWithType]
    }
  }
  return state
}

/*  Action creator  */
export const setTypeCategory = (itemsWithType) => ({ type: TYPE_CATEGORY, itemsWithType })


/*  Thunk  */

export const getTypeCategory = () => (dispatch) => {
  goodsAPI.getTypeCategory().then((data) => {
    dispatch(setTypeCategory(data))
  })
}


export default mainPageReducer