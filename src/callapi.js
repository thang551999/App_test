import axios from 'axios';
axios.defaults.baseURL = 'https://api.github.com/';
//   https://api.github.com/repos/thang551999/dadiem/stargazers
export const getinforuser = async user => {
  try {
    const response = await axios.get(`users/${user}`);
    return response;
    // if (response.status == 200) {
    //   return response.data;
    // } else {
    //   console.log('sadjhfjksdahgjfhdsjfh');
    //   return [];
    // }
  } catch (error) {
    return error.response.data;
    console.error(error);
  }
};
export const getrepo = async (user, page) => {
  console.log(user);
  try {
    const response = await axios.get(`users/${user}/repos?page=${page}`);
    return response;
    // if (response.status == 200) {
    //   return response.data;
    // } else {
    //   return [];
    // }
  } catch (error) {
    return error.response.data;
    console.error(error);
  }
};
export const getstargazers = async (fullname, page) => {
  console.log(fullname);
  try {
    const response = await axios.get(
      `repos/${fullname}/stargazers?page=${page}`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
