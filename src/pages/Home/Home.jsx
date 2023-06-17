import style from './Home.module.scss';
import Hero from '../../components/Home/Hero/Hero';
import About from '../../components/Home/About/About';
import Advantages from '../../components/Home/Advantages/Advantages';


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