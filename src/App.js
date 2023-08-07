import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import './assets/css/mobile.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShopifyDevelopment from "./pages/ShopifyDevelopment";
import LaravelDevelopment from "./pages/LaravelDevelopment";
import UserExperienceDesign from "./pages/UserExperienceDesign";
import WordpressDevelopment from "./pages/WordpressDevelopment";
import NodeJsDevelopment from "./pages/NodeJsDevelopment";
import ReactJsDevelopment from "./pages/ReactJsDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import CodeigniterDevelopment from "./pages/CodeigniterDevelopment";
import CustomeCommerceDevelopment from "./pages/CustomeCommerceDevelopment";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

function App() {
  return (

    <div className={'website'}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/laravel-development" element={<LaravelDevelopment />} />
          <Route path="/user-experience-design" element={<UserExperienceDesign />} />
          <Route path="/work" element={<Work />} />   
          <Route path="/nodejs-development" element={<NodeJsDevelopment />} />   
          <Route path="/reactjs-development" element={<ReactJsDevelopment />} />   
          <Route path="/wordpress-development" element={<WordpressDevelopment />} />   
          <Route path="/codeigniter-development" element={<CodeigniterDevelopment />} />   
          <Route path="/custom-ecommerce-development" element={<CustomeCommerceDevelopment />} />    
          <Route path="/digital-marketing" element={<DigitalMarketing />} />             
          <Route path="/contact-us" element={<ContactUs />} />                    
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
