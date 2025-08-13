import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./pages/About";
import Team from "./component/section/page/Team";
import Review from "./component/section/page/Review";
import Shop from "./component/section/page/Shop";
import Cart from "./component/shareComponents/Cart";
import ChackOut from "./component/shareComponents/ChackOut";
import SingleProduct from "./component/shareComponents/SingleProduct";
import SpecialOffer from "./component/shareComponents/specialOffer";
import NotFound from "./component/shareComponents/NotFound";
import { LoderProvider, useLoader } from "./context/LoderContex";
import Loader from "../src/component/shareComponents/Loder";  
import TermsAndConditions from "./component/TermsAndConditions";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Faq from "./pages/Faq";
import Blog from "./component/section/page/Blog";
import Login from "./component/section/home/Login";
import Flaver from "./component/section/home/Flaver";

function AppContent() {
  const { loading } = useLoader();

  return (
    <>
      {loading && <Loader />}  
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/review" element={<Review />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<ChackOut />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/specialOffer" element={<SpecialOffer />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/flaver" element={<Flaver/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LoderProvider>
      <AppContent />
    </LoderProvider>
  );
}

export default App;
