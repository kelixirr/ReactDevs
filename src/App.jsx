import { useState } from "react";
import Hero from "./Hero";
import Details from "./components/kelixirr/Details";
import Toast from "./components/VictorEZCodes/Toast";
import ProgressBar from "./components/VictorEZCodes/ProgressBar";
import ThemeSwitcher from "./components/VictorEZCodes/ThemeSwitcher";
import SearchFilter from "./components/VictorEZCodes/SearchFilter";
import FormValidator from "./components/VictorEZCodes/FormValidator";
import AccordionItems from "./components/kelixirr/AccordionItems";
import FlashCards from "./components/mektefaie/FlashCards";
import SliderCards from "./components/kelixirr/SliderCards";
import Modal from "./components/sushantpokhrel/Modal";
import Header from "./components/kelixirr/Header";
import Login from "./components/rrusyaidii/Login";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [progress] = useState(0);

  return (
    <>
      <Hero />
      <Details />
      <AccordionItems />
      <ProgressBar progress={progress} />
      <ThemeSwitcher />
      <SearchFilter />
      <FormValidator />
      <FlashCards />
      <SliderCards />
      <Modal />
      <Header />
      <Login />

      {/* Please Add Your Component Above This Line. Don't Add Div inside App, just component. Keep It Clean*/}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2>Toast Notifications Demo</h2>
        <button
          onClick={() => setShowToast(true)}
          style={{ padding: "10px 20px", margin: "10px" }}
        >
          Show Toast
        </button>
        {showToast && (
          <Toast
            message="Operation successful!"
            type="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
