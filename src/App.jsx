import Projects from "./components/pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
// import Loader from "./components/Loader";
// import "../src/App.scss";

function App() {
    return (
        <div>
            {/* <Loader /> */}

            <section className="main-section">
                <Navbar />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <footer>
                    <Footer />
                </footer>
            </section>
        </div>
    );
}

// const loader = document.querySelector(".loader");
// const main = document.querySelector(".main-section");

// function init() {
//     setTimeout(() => {
//         loader.style.opacity = 0;
//         loader.style.display = "none";

//         main.style.display = "block";
//         setTimeout(() => (main.style.opacity = 1), 50);
//     }, 5000);
// }

// init();

export default App;

/*
** fix loading animation of the page
**fix the navbar scroll bug

1. Use media querries for all images of project.
2 Gather high quality images for projects and edit them if needed
3. Fix the positioning around the elements of the card body 
so that all of them align properly wen displayed together.




*/
