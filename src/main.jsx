import { createRoot } from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
)
