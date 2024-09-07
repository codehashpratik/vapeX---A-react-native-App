import axios from 'axios';
import constants from './constants';

export async function getApi(url, header) {
  // console.log('GetApi: ', `${constants.BASE_URL}/${url}`, header);

  return await axios.get(`${constants.BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      'x-access-token': `${header.authorization}`,
      // Authorization: 'Bearer' + ' ' + header.authorization,
    },
  });
}

export async function getApiWithParam(url, param, header) {
  // console.log('getApiWithParam: ', `${constants.BASE_URL}/${url}`);
  return await axios({
    method: 'GET',
    baseURL: constants.BASE_URL,
    url: url,
    params: param,
    headers: {
      Accept: header.Accept,
      'Content-type': header.contenttype,
      'x-access-token': `${header.authorization}`,
    },
  });
}

export async function postApi(url, payload, header) {
  // console.log('PostApi: ', `${constants.BASE_URL}/${url}`);
  return await axios.post(`${constants.BASE_URL}/${url}`, payload, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      'x-access-token': `${header.authorization}`,
      // Authorization: 'Bearer ' + header.authorization,
    },
  });
}

export async function putApi(url, payload, header) {
  // console.log('PutApi: ', `${constants.BASE_URL}/${url}`);
  return await axios.put(`${constants.BASE_URL}/${url}`, payload, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      'x-access-token': `${header.authorization}`,
      // Authorization: 'Bearer ' + header.authorization,
    },
  });
}

export async function deleteApi(url, header) {
  // console.log('PutApi: ', `${constants.BASE_URL}/${url}`);
  return await axios.delete(`${constants.BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      'x-access-token': `${header.authorization}`,
      // Authorization: 'Bearer ' + header.authorization,
    },
  });
}
