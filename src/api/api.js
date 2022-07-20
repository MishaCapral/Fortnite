import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://fortnite-api.com/v2/cosmetics/br/',
  xhrFields: { withCredentials: true }

  /* headers: {
    something....
  } */
});

export const goodsAPI = {
  getAllItems() {
    return instance.get().then(response => {
      return response.data;
    })
  },
  getTypeItems(type) {
    return instance.get('search/all?type=' + type).then(response => {
      return response.data;
    })
  }
}