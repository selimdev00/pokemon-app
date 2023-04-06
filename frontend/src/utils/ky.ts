import ky from 'ky';

export interface ResponseData {
  results: any[];
}

export const request = ky.create({
  prefixUrl: process.env.REACT_APP_API_URL,
});
