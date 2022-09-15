import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>

        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                />
            </h1>
            <p>paragraph about how ambitious you are</p> //put about shit here
            <p>paragraph about how confident you are</p>
            <p>paragraph about how humble you are</p>
        </div>

        </div>
    )
}

export default About