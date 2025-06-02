import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ActivitiesView from './views/ActivitiesView';
import ContactView from './views/ContactView';
import WriteView from './views/WriteView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/activites" element={<ActivitiesView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/write" element={<WriteView />} />
          <Route path="/signUpView" element={<SignUpView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
