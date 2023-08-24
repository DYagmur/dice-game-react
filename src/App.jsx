import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    
    <section >
      <div className="fancybigborder w-full rounded-md relative bg-[#12191c] mainContainer">
        <Header />
        <Main />
        <Footer />
      </div>
    </section>


  );
}

export default App;
