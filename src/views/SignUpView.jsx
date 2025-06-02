import { useState } from 'react';
import { signUp } from '../components/SignUp.js';

const SignUpView = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const result = await signUp(username, password1, password2, nickname, university, location);

    if (result) alert('회원가입완료');
  };

  return (
    <section id="signUp">
      <div className="signUp__inner">
        <div className="signUp__title">회원가입</div>
        <form className="signUp__form" onSubmit={handleSubmit}>
          <input
            className="signUp__input"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="signUp__input"
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="학교"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="지역"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            className="signUp__input"
            type="password"
            placeholder="비밀번호"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
          />
          <input
            className="signUp__input"
            type="password"
            placeholder="비밀번호 확인"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
          <button className="auth-button" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpView;
