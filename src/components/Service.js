import React from 'react'
import '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/Styles/service.css'
import img1 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/Mold_Maker.JPG'
import img2 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/Injection_Machine.JPG'
import img3 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/assembly.JPG'
import img4 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/qc.JPG'
import img5 from '/Users/jamessutanto/CompanyProfile/CompanyProfile/company-profile/src/img/Painting.JPG'


function Service() {
  return (
    <div className='outer-div2'>
        <h1 className='h1-style'>Services</h1>
        <div className='service-list'>
            <div className='service-card'>
                <img src={img1}/>
                <div className='card-text'>
                    <h3>Mold Maker</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img2} />
                <div className='card-text'>
                    <h3>Injection Molding</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img5} style={{height:'100%', width:'100%'}} />
                <div className='card-text'>
                    <h3>Painting</h3>
                </div>
            </div>
        </div>
        <div className='service-list' style={{marginTop:'10px'}}>
            <div className='service-card'>
                <img src={img3}/>
                <div className='card-text'>
                    <h3>Sub Assy & Second Process</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img4} />
                <div className='card-text'>
                    <h3>Quality Control</h3>
                </div>
            </div>
        </div>
      
        <div className='service-para'>
            <p>Our services are tailored to meet the unique needs of each client, ensuring that we deliver effective solutions that help businesses grow.</p>
        </div>
    </div>
  )
}

export default Service