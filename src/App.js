import './App.scss';
import AppRoute  from './AppRoute';
import { Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
