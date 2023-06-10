import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Resume from './pages/Resume';
import Header from './components/Header';
import Post from './pages/Post.tsx';
import Write from './pages/Write.tsx';

function App() {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/CNU_Blog/'}>
      <Routes>
        <Route element={<Header />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          <Route path="/post/:postId" element={<Post />} />
        </Route>
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
