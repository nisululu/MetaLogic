import React, { Fragment, useRef } from 'react'
import './Careers.scss'
import { facilities, benefits, values, jobOffers } from '../../metaData'
import Wrapper from '../../components/wrapper/Wrapper'

const Careers = () => {

  const scroll = useRef(null) //used reference to auto scroll after onClick event

  const handleSubmit = (e) => { //form handler
    e.preventDefault()
  }

  return (
    <Fragment>

      <section className='sub-section-1'> 
        <img src='./bg-18.png' alt="" />
        <h3>Careers</h3>
        <h1>Navigate Your Next <span>Career</span> Move</h1>
        <p>We're continiously searching for the right talent. Check if you're a good match.</p>
        <button onClick={() => scroll.current.scrollIntoView({
          behavior: "smooth"
        })}>Explore Opportunities</button>
      </section>

      <section className='sub-section-2'>
        <h3>Values</h3>
        <h2>We Believe in</h2>
        <p>We believe in creating an environment where individuals can thrive and make a meaningful impact.</p>
        <Wrapper>
          <div className='values-cards'>
            {values.map((item, index) => {
              return (
                <div className='values-card' key={index}>
                  <img src={item.icon} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </Wrapper>
      </section>

      <section className='sub-section-3'>
        <h3>Benefits</h3>
        <h2>Life At MetaLogic</h2>
        <Wrapper>
          <div className="benefits-cards">
            {benefits.map((item, index) => {
              return (
                <div key={index} className="benefits-card">
                  <img src={item.icon} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </Wrapper>
      </section>

      <section className='sub-section-4'>
        <h3>Facilities</h3>
        <h2>MetaLogic Care For You</h2>
        <p>We're less about valuing perks and more about valuing people. Our employee performance are built around enhancing your wellbeing - at work and at home</p>
        <div className="facilities-cards">
          {facilities.map((item, index) => {
            return (
              <div key={index} className="facilities-card">
                <img src={item.icon} alt="" />
                <h4>{item.title}</h4>
              </div>
            )
          })}
          {facilities.map((item, index) => {
            return (
              <div key={index} className="facilities-card">
                <img src={item.icon} alt="" />
                <h4>{item.title}</h4>
              </div>
            )
          })}
        </div>
      </section>

      <section ref={scroll} className='sub-section-5' id='vacancies'>
        <h3>Opportunities</h3>
        <h2>Available Vacancies</h2>
        <Wrapper>
          <form className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Job Title/Keyword' />
            <select name="">
              <option value="internship">Internship</option>
              <option value="junior">Junior Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior</option>
            </select>
            <button type='submit'>Search</button>
          </form>

          <div className="job-offers">
            <h5>{jobOffers.length} Job Offers</h5>
            {jobOffers.map((item, index) => {
              return (
                <>
                  <div className="job-offer" key={index}>
                    <h6>{item.title}</h6>
                    <span className='type'>{item.type}</span>
                    <span className='location'>{item.location}</span>
                    <button className={item.status ? "apply" : ""} disabled={item.status ? false : true}>{item.status ? "Apply" : "Closed"}</button>
                  </div>
                </>
              )
            })}
          </div>

        </Wrapper>
      </section>
      
      <section className="sub-section-6">
        <h2>Subscribe to out News Letters</h2>
        <p>Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Please Enter Your Email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </Wrapper>
      </section>
    </Fragment>
  )
}

export default Careers
