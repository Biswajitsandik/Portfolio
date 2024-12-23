import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Age-app.png';
import Portfolio2 from '../../assets/Oriental Chat.png';
import Portfolio3 from '../../assets/bus.png';
import Portfolio4 from '../../assets/startup.png';
import Portfolio5 from '../../assets/design.png';
import Portfolio6 from '../../assets/other.png';
const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>I always try to learn from my previous mistake</span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt='' className='worksImg'/>
                <img src={Portfolio2} alt='' className='worksImg'/>
                <img src={Portfolio3} alt='' className='worksImg'/>
                <img src={Portfolio4} alt='' className='worksImg'/>
                <img src={Portfolio5} alt='' className='worksImg'/>
                <img src={Portfolio6} alt='' className='worksImg'/>
            </div>
            <button className='workBtn'>See More</button>
        </section>
    );
}

export default Works;