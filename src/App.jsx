import React from "react";
// import SlideTabsExample from "./components/SlideTabs.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div >
            {/* <SlideTabsExample /> */}
            <Navbar />
            <Home />
            {/* <Comments/> */}
        </div>
    );
}

export default App;