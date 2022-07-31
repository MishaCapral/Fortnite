import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://fortnite-api.com/v2/cosmetics/br/',
  xhrFields: { withCredentials: true }

  /* headers: {
    something....
  } */
});

let getType = (arr) => {
  return [...new Set(arr.map(item => item.type.value))]
}

export const goodsAPI = {
  getAllItems() {
    return instance.get().then(({ data }) => data)
  },
  getTypeCategory() {
    return instance.get().then(({ data: responseData }) => {
      return (getType(responseData.data));
    })
  },
  getTypeItems(type) {
    return instance.get('search/all?type=' + type).then(({ data }) => data)
  },
  getItem(itemId) {
    return instance.get('search/all?id=' + itemId).then(({ data }) => data)
  },
}