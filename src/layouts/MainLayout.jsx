import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-marcellus">
      <Navbar />
      <div className="px-5 md:px-10 lg:px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
