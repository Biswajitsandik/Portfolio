
import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import{Link} from 'react-scroll';
export const intro = () => {
    return (
        <section id="intro">
            <div className='introcontent'>
                <span className="hello">Hello,</span>
                <span className="introText">i'm<span className="introName"> Biswajit</span><br />Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire ME" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>

        </section>
    )
}

export default intro;
