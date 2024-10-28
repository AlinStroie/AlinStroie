/** 
 * @copyright 2024 Stroie
 * @license Apache-2.0
*/

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

/**
 * Register GSAP Plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: true,
                        markers: false
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <ReactLenis root>
        <Header />
        <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Contact />
        </main>
        <Footer />
        </ReactLenis>
    )

}

export default App