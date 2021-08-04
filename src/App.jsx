import Projects from "./components/pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Loader from "./components/Loader";
import "../src/App.scss";

import { useState, useEffect } from "react";

function App() {
    const [loadingRef, setloadingRef] = useState(false);
    const [mainRef, setMainRef] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setloadingRef(true);
            setTimeout(() => {
                setMainRef(true);
            }, 1163); //intial delay was 1550
        }, 1500); // initial delay was 2000
    }, []);

    return (
        <div>
            {!mainRef && (
                <div className={loadingRef ? "loading-fade-out" : "loading"}>
                    <Loader />
                </div>
            )}

            <section
                className={
                    mainRef
                        ? "main-section main-section-active"
                        : "main-section"
                }
            >
                <Navbar />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />

                <Footer />
            </section>
        </div>
    );
}

export default App;

/*



1. Use media querries for all images of project.
2 Gather high quality images for projects and edit them if needed
3. Fix the positioning around the elements of the card body 
so that all of them align properly when displayed together.
4.there is a nav bar scroll bag, fix it later


*/
