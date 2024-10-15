import React from 'react'
import './about.css';
import img1 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/Injection.JPG';

function About() {
  return (
    <div className='outer-div'>
        <h1 className='h1-style2'>About Us</h1>
        <div className='about-div'>
            <div className='about-div2'>
                <div style={{display:'flex', flexDirection:'row'}}>
                <h2 className='comp-header'>PT Tri-saudara Sentosa Industri</h2>
                <h2 className='comp-header'>PT Techno Indonesia</h2>
                </div>
                <p className='p2'>Our company leads the way in cutting-edge plastic parts manufacturing. With a focus on in-house, on-demand production, we deliver unparalleled quality and customization to meet your needs.</p>
                <div className='div-main'>
                    <div className='about-div2' style={{color:'black'}}>
                        <h3 style={{fontWeight:'700', marginLeft:'60px'}}>Milestones:</h3>
                        <p className='p2'>1994 : Established Company</p>
                        <p className='p2'>1997 : Start Mold making</p>
                        <p className='p2'>1998 : Start 2nd Process operation</p>
                        <p className='p2'>2005 : ISO 9001 : 2000 Certified</p>
                        <p className='p2'>2006 : Build PT. Techno Indonesia Jl. Jati 6 Blok J5 No.19, Newton Techno Park</p>
                        <p className='p2'>2011 : Build New Plant 2 PT. TRI SAUDARA INDUSTRI DELTA SILICON 3</p>
                    </div>
                    <img className='img-style' src={img1}/>
                </div>
                <div className='about-div3'>
                    <div className='timeline-container'>
                        <h2 className='timeline-heading'>1994</h2>
                        <p className='timeline-text'>Founded</p>                
                    </div>
                    <div className='timeline-container'>
                        <h2 className='timeline-heading'>3</h2>
                        <p className='timeline-text'>Factories</p>                
                    </div>
                    <div className='timeline-container'>
                        <h2 className='timeline-heading'>25</h2>
                        <p className='timeline-text'>Clients</p>                
                    </div>
                    <div className='timeline-continer'>
                        <h2 className='timeline-heading'>2</h2>
                        <p className='timeline-text'>Industries</p>                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About