import Projects from "./components/pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";

function App() {
    return (
        <div>
            <div>
                <Navbar />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
                {/* change font size in about section and conatct section for Ipads */}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

/*
1. Use media querries for all images of project.
2 Gather high quality images for projects and edit them if needed
3. Fix the positioning around the elements of the card body 
so that all of them align properly wen displayed together.



*/
