import { Routes, Route, Link } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
        Header
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
