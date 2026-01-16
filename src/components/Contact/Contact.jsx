import React from "react";
import "../Contact/Contact.css";

export default function Contact(){
    return(
        <section className="contact-section">
            <h2>Contact Us</h2>

            <address className="contact-card">
                <div className="contact-item">
                    <span className="label">Address:</span>
                    <p>Saburtalo, Vazha-Pshavela Ave 78a, Tbilisi, Georgia</p>
                </div>

                <div className="contact-item">
                    <span className="label">Phone:</span>
                    <a href="tel:+995599999999">+995 599 99 99 99</a>
                </div>

                <div className="contact-item">
                    <span className="label">Email:</span>
                    <a href="mailto:Giotchey@gmail.com">Giotchey@gmail.com</a>
                </div>

                <div className="contact-item">
                    <span className="label">Working Hours:</span>
                    <p>Mon - Sat: 11:00 - 20:00</p>
                </div>
            </address>
        </section>
    );
}