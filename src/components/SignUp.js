import api from './api';

export const signUp = async (username, password1, password2, nickname, university, location) => {
  const data = {
    username: username,
    password1: password1,
    password2: password2,
    nickname: nickname,
    university: university,
    location: location,
  };

  try {
    const response = await api.post('/dj/registration/', data);
    console.log(response.data.user);
    return response.data.user;
  } catch (error) {
    console.log('에러', error);
    console.log('상세:', error.response?.data); // 💥 꼭 확인!
    alert('오류: ' + JSON.stringify(error.response?.data));
  }
};
