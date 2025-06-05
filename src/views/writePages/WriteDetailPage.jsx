import { useNavigate, useParams } from 'react-router-dom';

const WriteDetailPage = ({ posts }) => {
  const { id } = useParams(); // URL에서 id 추출
  const navigate = useNavigate();

  const post = posts.find((p) => String(p.id) === id); // 글목록 중 id가 동일한 글 찾기기

  return (
    <section className="writeDetailPage__inner">
      <h2 className="writeDetailPage__title">{post.title}</h2>
      <p className="writeDetailPage__content">{post.content}</p>

      <button className="writeDetailPage__back" onClick={() => navigate('/write')}>
        목록으로
      </button>
    </section>
  );
};

export default WriteDetailPage;
