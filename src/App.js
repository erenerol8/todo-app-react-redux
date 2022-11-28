import "./App.css";
import Content from "./Components/Content";
import ContentFooter from "./Components/ContentFooter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <Footer />
      </section>
      <ContentFooter />
    </>
  );
}

export default App;
