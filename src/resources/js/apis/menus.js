import axios from 'axios';
import { menusIndex } from '../urls/index'

export const fetchMenus =() => {
  return axios.get(menusIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
