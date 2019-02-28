import React , {Component} from 'react'
import {render} from 'react-dom'

const serviceList = [
  {title: "Production services", description: "Standard fee: £200 per day. Please get in touch to discuss project rates and discounts for local unsigned artists."},
  {title: "Mastering", description: "£50 per track."},
  {title: "Online Mixing", description: "Digital: £80 per track (including 2 revisions) Analogue: £150 per track."},
  {title: "Other sessions and studio hire", description: "Please get in touch to discuss rates.."},
]

const Services = () => {
    return (
      <article id="services" className="services-container">
        <section>
        </section>
        <h2>Services</h2>
        <ul className="services">
          {serviceList.map(item => {
            return (
              <li>
                <h4>{item.title}</h4>
                <span>{item.description}</span>
              </li>
            )
          })}
        </ul>
      </article>
    )
}

export default Services
