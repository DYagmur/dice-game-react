import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";


import "./App.css";

function App() {
  return (
    <section className="bg-[#12191c] min-h-screen p-5 lg:px-20 box-border text-white flex justify-center items-center relative z-0">
      <div className="fancybigborder w-full rounded-md relative bg-[#12191c] mainContainer">
      <Navbar />
      <Main />
      <Footer />
      </div>
    </section>
  );
}

export default App;
