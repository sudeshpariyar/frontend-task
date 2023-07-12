import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import WelcomeBox from "./components/WelcomeBox";
import DevicesList from "./components/DevicesList";
import "./App.css";

function App() {
  const [listOfDevices, setListOfDevices] = useState([]);
  return (
    <div className="app">
      <Header
        organisationName="Vessel One"
        listOfDevices={listOfDevices}
        setListOfDevices={setListOfDevices}
      />
      <WelcomeBox vesselName="Vessel One" listOfDevices={listOfDevices} />
      <DevicesList
        listOfDevices={listOfDevices}
        setListOfDevices={setListOfDevices}
      />
    </div>
  );
}

export default App;
