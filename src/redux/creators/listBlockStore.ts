import { GET_REGION_DATA, GET_PROVINCE_DATA, GET_COUNTRY_DATA } from '../types/action-types';

export const getRegionData = () => ({
  type: GET_REGION_DATA,
});

export const getProvinceData = () => ({
  type: GET_PROVINCE_DATA,
});

export const getCountryData = () => ({
  type: GET_COUNTRY_DATA,
});
