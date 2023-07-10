import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import WelcomeBox from "./components/WelcomeBox";

function App() {
  const [organisationName, setOrganisationName] = useState("Test Organisation");
  return (
    <div className="app">
      <Header organisationName={organisationName} />
      <WelcomeBox vesselName=" Vessel One" />
      {/* <button className="create-room-button">Create New Room</button> */}
    </div>
  );
}

export default App;
