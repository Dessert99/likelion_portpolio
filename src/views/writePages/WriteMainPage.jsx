import React from 'react';
import { Link } from 'react-router-dom';

const WriteMainPage = ({ posts }) => {
  return (
    <section className="writeMainPage__inner">
      <div>
        <h2 className="writeMainPage__guide">글 목록</h2>
      </div>
      <ul className="writeMainPage__list">
        {posts.length === 0 ? (
          <li className="writeMainPage__empty">아직 작성된 글이 없습니다.</li>
        ) : (
          posts.map((post) => (
            <li key={post.id} className="writeMainPage__item">
              <Link to={`/write/${post.id}`}>
                <h3 className="writeMainPage__title">{post.title}</h3>
                <p className="writeMainPage__content">
                  {post.content.length > 50 ? post.content.slice(0, 50) + '...' : post.content}
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>
      <div className="writeMainPage__buttonBox">
        <Link to="/write/new" className="writeMainPage__button">
          글쓰기
        </Link>
      </div>
    </section>
  );
};

export default WriteMainPage;
