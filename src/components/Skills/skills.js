import React from 'react'
import './skills.css';
import UIDesign from  '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">"I have expertise in programming languages such as CSS, JavaScript, Java, MySQL, C, Python, 
                and HTML, along with frameworks and tools like Flask, React.js, Node.js, and 
                Java Swing. Additionally, I have experience with Figma, Adobe Illustrator, 
                graphic designing, and moderate proficiency in UI/UX design. 
                Currently, I am building a startup based in North-East India."
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className='skillBarText'>
                        <h2>Graphic Designing along with UI/UX designing</h2>
                        <p>currently moderate level</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>Moderate Experience</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className='skillBarText'>
                        <h2>App design</h2>
                        <p>Learning to build</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
