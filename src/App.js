import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Register />}
        />
        <Route
          path='/Login'
          element={<Login />}
        />
        <Route
          path='/Home'
          element={<Home />}
        />
        <Route
          path='/About'
          element={<About />}
        />
        <Route
          path='/Services'
          element={<Services />}
        />
        <Route
          path='/Packages'
          element={<Packages />}
        />
        <Route
          path='/Blog'
          element={<Blog />}
        />
        <Route
          path='/Contact'
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
