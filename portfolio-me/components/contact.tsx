"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="section-container">
      <h2 className="section-title">CONTACT</h2>

      <div className="section-content">
        <p>Feel free to reach out for collaborations, questions, or just to say hello.</p>

        {isSubmitted ? (
          <div className="data-box active" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="p-normal">Message received. Thank you for your submission.</div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        )}

        <div className="social-links">
          <a href="#" className="social-link">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="#" className="social-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="#" className="social-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="social-link">
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  )
}
