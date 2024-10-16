import React from 'react'
import './client.css'
import img1 from './p1.JPG'
import img2 from './Sharp_TV.JPG'
import img3 from './pxg930.JPG'
import img4 from './mpart.JPG'
import img5 from './prod-1.jpg'

function Products() {
  return (
    <div className='outer-div3'>
      <h1 className='h1-style'>Products</h1>
      <div className='prod-div'>
        <div style={{
          borderRadius: '10px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',  // Removed duplicate boxShadow
          overflow: 'hidden',
          width: '1000px',
          height: '860px',
          marginLeft: '20px',
          marginTop: '10px',
          marginRight: '25px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'white'
        }}>
          <img src={img5} alt="Product Overview" style={{ width: '100%', height: '80%' }} />
          <div style={{ padding: '20px', backgroundColor: '#fff' }}>  {/* Removed duplicate padding */}
            <h3 style={{ margin: '10px 0 0 0', color: '#000', fontSize: '18px' }}>
              These are the products that our company strives to create and deliver to our clients. We ensure excellence and quality work.
            </h3>
          </div>
        </div>

        <div className='service-list'>
          <div className='service-card2'>
            <img src={img1} alt="Car Parts" />
            <h3>Car Parts</h3>
            <div className='card-text2'>
              <p>This is a Car product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img2} alt="Sharp Tv" />
            <h3>Tv Parts</h3>
            <div className='card-text2'>
              <p>This is a Tv product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img3} alt="Printer Parts" />
            <h3>Printer Parts</h3>
            <div className='card-text2'>
              <p>This is a Printer product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img4} alt="Motorcycle Parts" />
            <h3>Motorcycle Parts</h3>
            <div className='card-text2'>
              <p>This is a Motorcycle product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
