import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WritePostPage = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 막기기

    if (!title || !content) {
      alert('제목과 내용을 입력하시오');
      return;
    }

    const newPost = {
      id: Date.now(), //고유한 id 생성성
      title,
      content,
    };

    onAddPost(newPost);
    navigate('/write');
  };

  return (
    <section className="writePostPage__inner">
      <h2 className="writePostPage__guide">새 글 작성</h2>
      <form className="writePostPage__form" onSubmit={handleSubmit}>
        <input
          className="writePostPage__title"
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="writePostPage__content"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <br />
        <button type="submit">포스팅하기</button>
      </form>
    </section>
  );
};

export default WritePostPage;
