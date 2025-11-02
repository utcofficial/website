"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Contact Hero */}
        <section className="min-h-96 bg-gradient-to-br from-secondary to-background py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-foreground/70">We would love to hear from you. Reach out and let's connect.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              <div className="glass p-8 rounded-xl">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-foreground/70 mb-2">unitedtechcommunity@gmail.com</p>
                <p className="text-sm text-foreground/50">We typically respond within 24 hours</p>
              </div>
              <div className="glass p-8 rounded-xl">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-foreground/70 mb-2">Bangalore, India</p>
                <p className="text-sm text-foreground/50">Join us for in-person meetups and events</p>
              </div>
              <div className="glass p-8 rounded-xl">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-foreground/70 mb-2">Follow us on social media</p>
                <p className="text-sm text-foreground/50">@unitedtechcommunity</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary outline-none transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary outline-none transition-colors h-32 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
