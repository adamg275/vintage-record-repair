import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [selectedService, setSelectedService] = useState('');

    const handleEnquire = (service: string) => {
        setSelectedService(service);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services onEnquire={handleEnquire} />
            <Gallery />
            <Contact selectedService={selectedService} />
            <Footer />
        </>
    );
}

export default App;