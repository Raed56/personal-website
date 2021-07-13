import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="page-container">
            <Home />
            <Projects />
            <Contact />
            <Footer />
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
