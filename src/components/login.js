import api from './api';

export const login = async (username, password) => {
  const data = {
    username: username,
    password: password,
  };
  try {
    const response = await api.post('/dj/login/', data);
    console.log(response.data.user);
    return response.data.user;
  } catch (error) {
    console.log('에러', error);
  }
};
