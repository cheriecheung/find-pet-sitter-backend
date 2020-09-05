import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const userURL = `${process.env.REACT_APP_API_DOMAIN}/user`;
const sitterAccountURL = (id) => `${process.env.REACT_APP_API_DOMAIN}/sitter/account/${id}`;
const sitterProfileURL = (id) => `${process.env.REACT_APP_API_DOMAIN}/sitter/profile/${id}`;
const ownerAccountURL = (id) => `${process.env.REACT_APP_API_DOMAIN}/owner/account/${id}`;
const ownerProfileURL = (id) => `${process.env.REACT_APP_API_DOMAIN}/owner/profile/${id}`;

const ownerURL = `${process.env.REACT_APP_API_DOMAIN}/owner`;
const config = {
  withCredentials: true,
  headers: {
    Authorization: cookies.get('userId'),
  },
};

export function getUser() {
  return (dispatch) => {
    axios
      .get(userURL, config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_USER',
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function sendUser(data) {
  return (dispatch) => {
    axios
      .post(userURL, data, config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'SAVE_USER',
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function getOwnerProfile(id) {
  return (dispatch) => {
    axios
      .get(ownerProfileURL(id))
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_PROFILE',
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function getSitterProfile(id) {
  return (dispatch) => {
    axios
      .get(sitterProfileURL(id))
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_PROFILE',
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function getSitterAccount(id) {
  return (dispatch) => {
    axios
      .get(sitterAccountURL(id))
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_PROFILE',
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function saveSitterAccount(id, data) {
  console.log({ data });
  return (dispatch) => {
    axios
      .post(sitterAccountURL(id), data, config)
      .then((response) => {
        console.log(response);

        dispatch({
          type: 'SAVE_PROFILE',
          payload: 'data',
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function getOwner() {
  return (dispatch) => {
    axios
      .get(ownerURL, config)
      .then(({ data }) => {
        dispatch({
          type: 'GET_PROFILE',
          payload: data,
        });
      })
      .catch((error) => console.log(error.response));
  };
}

export function saveOwner(data) {
  console.log({ data });
  return (dispatch) => {
    axios
      .post(ownerURL, data, config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'SAVE_PROFILE',
          payload: 'done',
        });
      })
      .catch((error) => console.log(error.response));
  };
}
