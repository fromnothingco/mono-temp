import React , {Component} from 'react'

export default class Offer extends Component {
  render() {
    return (
        <section id="offer" className="offer">
          <div className="banner">
            <h2>February Special Offer</h2>
            <h3>Discounts on Analogue Mixing and Mastering.</h3>

            <ul>
                <li>Analogue mixing at only £100 per track </li>
                <li>Analogue mastering at only £25 per track </li>
            </ul>

            <p>Book now by contacting <a href="mailto:hello@mickrossproducer.com">hello@mickrossproducer.com</a></p>

            <p className="small">
                Expires 28/02/18.<br/>
                Offer price only applies to unattended sessions.<br/>
                Price includes one revision.<br/>
                We reserve the right to alter or withdraw the offer at any time.<br/>
            </p>
          </div>
        </section>
    )
  }
}
