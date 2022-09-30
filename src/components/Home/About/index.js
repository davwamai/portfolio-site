import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux, faCss3, faGitAlt, faJsSquare, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import React from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am, as of now, semi-proficient in Frontend Development, particularly with distributions included in the React framework.
                    There are many development tools I am very familiar with that are not included in the animation on the right. Examples
                    include but are not limited to <span className='python'>Python</span><span className='three'>3</span>, <span className='sage'>SageMath</span>, <span className='wolfram'>Mathematica</span>, <span className='gsap'>gsap</span>, <span className='json'>JSON</span>, <span className='cpp'>C++</span>, <span className='clang'>C</span>, <span className='manim'>Manim</span>, and <span className='sass'>Sass</span>.
                </p>
                <p>I'm very ambitious when it comes to all things related to computer science or mathematics in any variety. 
                Projects are challenges rather than tasks to me, I find the mentality to be much more rewarding in the end when the 
                job is done.   </p> 
                <p>I'm quietly confident, naturally curious, and always looking for ways to improve my skills and learn from others. 
                </p>
                <p>If I need to define myself in one sentence, I would say I am a family-oriented person who loves food, his cat, and 
                    tech!
                </p>
            </div>
           
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faLinux} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJava} color="#F06529"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />

        </>
    )
}

export default About