import React from 'react'

const Contact = () => {
  return (
  <>
  
  




<div className='cont-sec'>
    <div className='cstm-img-con'>
        <img src="assets/images/img52.jpg" className='cstm-bg-cont'></img>
   
    <div className='cstm-img-text-cont'>
       
        <h1 className='text-white cstm-get'>GET IN TOUCH</h1>
        <p className="subtitle ms-5">COME WORKOUT WITH US TODAY</p>
    </div>
    </div>
</div>
    




      <section className="contact-section">
      <h2>SEND US A MESSAGE</h2>
      <div className="divider"></div>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit molestie vehicula.<br />
        Nullam in dui mauris. Vivamus hendrerit arcu sed erat .
      </p>

      <form className="contact-form mt-3">
        <div className="form-row">
          
          <input type="text" placeholder="👤 Your name..." />
          <input type="email" placeholder="✉️ Your E-Mail..." />
        </div>

        <div className="form-row">
          <input type="text" placeholder="💼 Why you are contacting us..." />
        </div>

        <div className="form-row">
          <textarea placeholder="✏️ Your message..." rows="6"></textarea>
        </div>
      </form>
    </section>
  </>
  )
}

export default Contact