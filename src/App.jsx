import React from 'react'
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <main>
        <div>
            <NavBar />
           <Hero />
            <ShowcaseSection />
        </div>
        </main>
    )
}
export default App
