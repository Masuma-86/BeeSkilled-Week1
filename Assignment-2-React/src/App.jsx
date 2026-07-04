import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <Card
        title="Reusable Card"
        description="This card receives data using props."
      />

      <Button />

      <Form />

      <Footer />
    </div>
  );
}

export default App;