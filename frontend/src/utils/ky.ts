import ky from 'ky';

export const request = ky.create({
  prefixUrl: process.env.REACT_APP_API_URL,
});
