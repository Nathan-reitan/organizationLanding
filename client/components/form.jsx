import React from 'react';

export default function form(props) {

  return (
    <main className="p-1 container d-flex flex-wrap">
      <div className="w-100">
        <h4>
          Our Vision:
        </h4>
        <p>
          Our vision is to eliminate your overhead by providing a product that will handle your electronic filing organization.
        </p>
      </div>
      <div className='bg-dark text-light p-1'>
        <h5>
          Founder:
        </h5>
        <div className='w-100 rounded text-center'>
          <img src="assets/nathan-r.jpg" alt="photo" className='w-50 rounded-circle' />
        </div>
        <p>
          Nathan Reitan is the founder of our company.  While he worked as a legal assitant after high school.
          He realized while housing emails, that there must be a way to automate the whole process requiring little support from the staff.
        </p>
        <p>
          Thus, EFO was born and is here to help lighten your overhead and minimize human error.
        </p>
      </div>
      <div className="border bg-info w-100">
        <form onSubmit={props.handleSubmit}className="d-flex flex-wrap flex-column" id="contact">
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="first">First Name:</label>
            <input type="text" name="first" id="first" className="w-50" onChange={props.handleChange} required/>
          </div>
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="last">Last Name:</label>
            <input type="text" name="last" id="last" className="w-50" onChange={props.handleChange} required/>
          </div>
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" name="phone" id="phone" className="w-50" onChange={props.handleChange} required/>
          </div>
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" className="w-50" onChange={props.handleChange} required/>
          </div>
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="message">Message:</label>
            <textarea rows="10" cols="50" name="message" className="w-50" id="message" onChange={props.handleChange}></textarea>
          </div>
          <div className="d-flex flex-row-reverse m-1">
            <button type='submit' value='submit' className='rounded'>Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}
