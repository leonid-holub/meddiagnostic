import style from './Home.module.scss';
import Hero from '../../components/Home/Hero/Hero';
import About from '../../components/Home/About/About';
import Advantages from '../../components/Home/Advantages/Advantages';
import Cta from '../../components/Cta/Cta';


const Home = () => {
    
    return (
        <>
            <Hero/>
            <About/>
            <Advantages/>
            <Cta/>
        </>
    )
}

export default Home;