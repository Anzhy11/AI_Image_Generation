
import { Routes, Route, Link } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain"/>
        </Link>
        <Link to="creat-post" className="font-inter font-medium  bg-[#47afdc] text-white px-4 py-2 rounded-md">
          Create
        </Link>
        
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;