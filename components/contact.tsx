"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#111827]/70">
            Ready to start your project? Get in touch with us today and let's discuss how we can help.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Card className="h-full border-none shadow-lg">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-[#111827]">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="mr-4 h-5 w-5 text-[#000035]" />
                        <div>
                          <h4 className="font-medium text-[#111827]">Our Location</h4>
                          <p className="text-sm text-[#111827]/70">Jakarta Indonesia</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="mr-4 h-5 w-5 text-[#000035]" />
                        <div>
                          <h4 className="font-medium text-[#111827]">Phone</h4>
                          <p className="text-sm text-[#111827]/70">(+234) 808-877-2516 </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="mr-4 h-5 w-5 text-[#000035]" />
                        <div>
                          <h4 className="font-medium text-[#111827]">Whatsapp</h4>
                          <p className="text-sm text-[#111827]/70">(+62) 813-1970-0926 </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="mr-4 h-5 w-5 text-[#000035]" />
                        <div>
                          <h4 className="font-medium text-[#111827]">Email</h4>
                          <p className="text-sm text-[#111827]/70">coetechnologycompany@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mr-4 h-5 w-5 text-[#000035]" />
                        <div>
                          <h4 className="font-medium text-[#111827]">Working Hours</h4>
                          <p className="text-sm text-[#111827]/70">Monday - Friday: 9AM - 5PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-3 font-medium text-[#111827]">Follow Us</h4>
                    <div className="flex space-x-3">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-[#1D4ED8] hover:text-white"
                        >
                          <span className="sr-only">{social}</span>
                          <div className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#111827]">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#111827]">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-[#111827]">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-[#111827]">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Website Development"
                          required
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#111827]">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        className="min-h-[150px] border-gray-200"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#000035] hover:bg-[#000035]/90">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
