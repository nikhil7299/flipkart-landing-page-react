import { NavBar } from "./nav_bar/nav_bar";
import './App.css';
import { Middle } from "./middle/middle";
import { Banner } from "./banner/banner";
// import { Extra } from "./extra/extra";

export default function App() {
  return (

    <div className="App">

      <NavBar />
      <Middle />
      <Banner />

    </div>
  );
}
