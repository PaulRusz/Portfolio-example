import '../styles/global.scss'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js';


export default function App ({ Component, pageProps }) {
        // Define the routes array with route objects for each section
    const routes = [
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
        { name: "resume", path: "/resume" },
        { name: "portfolio", path: "/portfolio" }
    ];
    return (
    <div>
        <Navbar routes={routes}/>
        <Component {...pageProps} />
        <Footer />
    </div>
    )
}
