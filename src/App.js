import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ActivitiesView from './views/ActivitiesView';
import ContactView from './views/ContactView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import Header from './components/Header';
import { useState } from 'react';

import WriteMainPage from './views/writePages/WriteMainPage';
import WritePostPage from './views/writePages/WritePostPage';
import WriteDetailPage from './views/writePages/WriteDetailPage';

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // 새로운 포스트가 맨 위로 오도록 설정.
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/activites" element={<ActivitiesView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/signUpView" element={<SignUpView />} />

          <Route path="/write" element={<WriteMainPage posts={posts} />} />
          <Route path="/write/new" element={<WritePostPage onAddPost={handleAddPost} />} />
          <Route path="/write/:id" element={<WriteDetailPage posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
