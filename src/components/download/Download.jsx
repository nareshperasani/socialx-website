import React, {useEffect} from 'react';
import './Download.css';
import {FaApple, FaWindows} from 'react-icons/fa';
import {GrAndroid} from 'react-icons/gr';
import {IconContext} from 'react-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Download() {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    },[])
    return (
        <section id="download">
            <div className="container download" data-aos="fade-up">
                <h2>SOCIALX MESSENGER DOWNLOAD</h2>
                <p className="u-text-small">
                    Our apps are available for download on all stores.
                </p>
                <IconContext.Provider value={{size:"15"}}>
                <div className="download-icons">
                    <div className="download-icon">
                        <FaApple size={15} /> <p>ios</p>
                    </div>
                    <div className="download-icon">
                        <GrAndroid size={15} /> <p>Android</p>
                    </div>
                    <div className="download-icon">
                        <FaWindows size={15} /> <p>Windows</p>
                    </div>
                </div>
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download;
