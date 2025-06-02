import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../components/login';

const LoginView = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  async function handleLogin(e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    console.log('ID:', id);
    console.log('PW:', pw);
    try {
      const user = await login(id, pw);
      alert(`${user.nickname}님 환영합니다!`);
    } catch (error) {
      alert('로그인 실패! 아이디와 비밀번호를 확인하세요.');
    }
  }

  return (
    <section id="loginView">
      <div className="loginView__inner">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디를 입력하시오"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하시오"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            required
          />
          <button type="submit">로그인</button>
        </form>

        <Link to="/signUpView" className="signup-button">
          회원가입
        </Link>
      </div>
    </section>
  );
};

export default LoginView;
