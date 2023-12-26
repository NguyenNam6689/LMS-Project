//* IMPORT
import { axiosIns } from './axios';

export const getApi = async (url, params, config) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosIns.get(url, { params, ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postApi = async (url, data, config) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosIns.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
