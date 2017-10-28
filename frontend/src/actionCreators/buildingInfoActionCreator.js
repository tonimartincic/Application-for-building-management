import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function getBuildingInfo(buildingId) {
  try {
    const response = await axios.get(`api/buildings/${buildingId}`);
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
