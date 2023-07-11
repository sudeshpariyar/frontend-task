import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import WelcomeBox from "./components/WelcomeBox";
import DevicesList from "./components/DevicesList";

function App() {
  const [listOfDevices, setListOfDevices] = useState([]);
  return (
    <div className="app">
      <Header
        organisationName="Vessel One"
        listOfDevices={listOfDevices}
        setListOfDevices={setListOfDevices}
      />
      <WelcomeBox vesselName="Vessel One" />
      <DevicesList listOfDevices={listOfDevices} />
    </div>
  );
}

export default App;
