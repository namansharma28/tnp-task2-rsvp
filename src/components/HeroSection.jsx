import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
  <div className="hero-content">
    <h1>Join the Speaker Session</h1>
    <p className="hero-description">
      Learn how to balance your urge to learn with the urge to earn. In this session, industry experts will discuss strategies, share their experiences, and guide you through this critical juncture in your career. Don't miss out on this opportunity to shape your future!
    </p>
    <p className="hero-details">
      <strong>Date:</strong> 15th April 2025<br/>
      <strong>Time:</strong> 5:00 PM IST<br/>
      <strong>Location:</strong> Online - Zoom (Link will be shared after registration)
    </p>
    <a href="#register" className="cta-button">Register Now</a>
  </div>
</section>
  )
}
