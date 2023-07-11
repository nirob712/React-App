import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

const App = () => {
  const title = "My React App";

  return (
    <div className="container mx-auto p-4">
      <Header title={title} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
