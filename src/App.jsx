import Hero from "./components/hero";
import NavBar from "./components/navbar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App;
