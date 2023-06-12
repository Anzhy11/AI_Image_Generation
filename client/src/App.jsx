import { Routes, Route, Link } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium  bg-[#47afdc] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
<<<<<<< HEAD
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
=======
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
>>>>>>> df173a6a5ea66703f7157eeb9f1ac61f9ab1a4c6
      </main>
    </>
  );
};

export default App;
