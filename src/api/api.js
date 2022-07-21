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
    return instance.get().then(response => {
      return response.data;
    })
  },
  getTypeCategory() {
    return instance.get().then(response => {
      return (getType(response.data.data));
    })
  },
  getTypeItems(type) {
    return instance.get('search/all?type=' + type).then(response => {
      return response.data;
    })
  }
}