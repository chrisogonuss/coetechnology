"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

import TodotuaIriawan from "/public/TodotuaIriawan.jpeg"
import RodicaLeonte from "/public/RodicaLeonte.jpeg"
import JosephOkelia from "/public/JosephOkelia.jpeg"
import DavidSmith from "/public/DavidSmith.jpeg"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Todotua Iriawan",
      company: "PT AHA Commerce.",
      image: TodotuaIriawan,
      quote:
        "Bekerja sama dengan tim ini mengubah permainan bisnis kami. Mereka memberikan situs web yang melampaui ekspektasi kami dan telah meningkatkan kehadiran online kami secara signifikan.",
      rating: 5,
    },
    {
      name: " Rodica Leonte",
      company: "Sola Scriptura Sibiu",
      image: RodicaLeonte,
      quote:
        "Atenția la detalii și expertiza tehnică a acestei agenții sunt impresionante. Site-ul nostru de librărie a înregistrat o creștere de 40% a conversiilor de la reproiectare.",
      rating: 5,
    },
    {
      name: "Joseph Okelia",
      company: "Jeseph Global Ventures",
      image: JosephOkelia,
      quote:
        "As a startup, we needed a website that could grow with us. This team delivered exactly that - a scalable, beautiful site that has helped us establish credibility in our market.",
      rating: 4,
    },
    {
      name: "David Smith",
      company: "Monarch Real Estate",
      image: DavidSmith,
      quote:
        "The team's creativity and technical skills are the perfect combination. They transformed our outdated website into a modern, user-friendly platform that our customers love.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#111827]/70">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="border-none bg-white shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <Quote className="h-12 w-12 text-[#1D4ED8]/20" />
                    </div>
                    <p className="mb-6 text-center text-lg text-[#111827]/80">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <div className="mb-2 h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          width={500}
                          height={500}
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-[#111827]">{testimonial.name}</h4>
                      <p className="text-sm text-[#111827]/70">{testimonial.company}</p>
                      <div className="mt-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#22C55E] text-[#22C55E]" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-[#1D4ED8] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-[#1D4ED8] hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#000035]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
