import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
        <footer class="footer container">
            <div class="row text">
            <div class="col">
                <div>
                <img src={logo} alt="Logo" />
                </div>
                <div class="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</div>
                <div>©2020 Vehicle Rental Center. All rights reserved</div>
            </div>
            <div class="col-md-2">
                <h5>Destination</h5>
                <ul>
                <li>Bali</li>
                <li>Yogyakarta</li>
                <li>Jakarta</li>
                <li>Kalimantan</li>
                <li>Malang</li>
                </ul>
            </div>
            <div class="col-md-2">
                <h5>Destination</h5>
                <ul>
                <li>Bali</li>
                <li>Yogyakarta</li>
                <li>Jakarta</li>
                <li>Kalimantan</li>
                <li>Malang</li>
                </ul>
            </div>
            <div class="col-md-2">
                <h5>Destination</h5>
                <ul>
                <li>Bali</li>
                <li>Yogyakarta</li>
                <li>Jakarta</li>
                <li>Kalimantan</li>
                <li>Malang</li>
                </ul>
            </div>
            </div>
            <div class="link-social">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            </div>
        </footer>
    )
  }
}
