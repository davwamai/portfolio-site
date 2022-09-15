import LogoTitle from '../../images/logo-d.png';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','D','a', 'v', 'i', 'd',',']
    const jobArray = ['A', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={`${letterClass}`}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Aspiring Developer / Java Expert / Mathematics Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link> 
            </div>

            <Logo></Logo>

        </div>

    );

}

export default Home