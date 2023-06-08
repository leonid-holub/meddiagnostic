import style from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';


const Home = () => {
    
    return (
        <>
            <Hero/>
            <About/>
            <Advantages/>
        </>
    )
}

export default Home;