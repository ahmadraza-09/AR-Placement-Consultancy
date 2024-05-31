import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Service from './pages/service';
import IndustryPractice from './pages/industrypractice';
import Faq from './pages/faq';
import Contact from './pages/contact';
import About from './pages/about';
import KnowMore from './pages/knowmore';
import IndustryDataPage from './pages/industrydatapage';
import Gallery from './pages/gallery';
import BlogPage from './pages/blogpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/services" element={<Service/>}/>
          <Route  path="/industry" element={<IndustryPractice/>}/>
          <Route  path="/faq" element={<Faq/>}/>
          <Route  path="/blog" element={<BlogPage/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/gallery" element={<Gallery/>}/>
          <Route  path="/service/:serviceSlug" element={<KnowMore/>}/>
          <Route  path="/industry/:industrySlug" element={<IndustryDataPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
