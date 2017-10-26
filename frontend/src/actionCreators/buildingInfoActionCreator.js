import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function getBuildingInfo () {
  try {
    const response = await axios.get('api/buildings/1');
    return {
      type: types.FETCH_BUILDING_INFO_SUCCESS,
      data: Object.assign(
        {
          id: response.data.id,
        },
        {
          address: response.data.address,
        },
        {
          landlord: response.data.landlord,
        },
        {
          funds: response.data.funds,
        },
        {
          apartments: response.data.apartments,
        },
      )
    }
  } catch (err) {
    return {
      type: types.FETCH_BUILDING_INFO_FAILURE,
      data: err,
    }
  }
}
