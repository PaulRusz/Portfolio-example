import '../styles/global.scss'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer.js';


export default function App ({ Component, pageProps }) {
    return (
    <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </div>
    )
}
