"use client"

import { useState, useEffect } from "react"

export default function About() {
  return (
    <div className="section-container">
      <h2 className="section-title">ABOUT</h2>
      <div className="section-content">
        <p>Hello, I am a software developer with a passion for creating unique digital experiences.</p>
        <div style={{ marginTop: "2rem" }}>
          <p>I specialize in building web applications with modern technologies like React, Next.js, and Node.js.</p>
          <p>
            My approach to development focuses on creating clean, efficient code that delivers exceptional user
            experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
            refining macrodata.
          </p>

          <div className="data-box" style={{ marginTop: "2rem" }}>
            <div className="p-normal">Employee #4873</div>
          </div>
        </div>
      </div>
    </div>
  )
}
