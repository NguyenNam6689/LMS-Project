//* LIB
import axios from 'axios';

//* IMPORT
import { _15_SECOND } from '@/common/constants';
import { HeaderConfig } from '@/common/enums';

export const axiosIns = axios.create({
  baseURL: 'http://59.106.221.43:8888',
  timeout: _15_SECOND,
  headers: {
    Accept: HeaderConfig.Accept,
  },
});
