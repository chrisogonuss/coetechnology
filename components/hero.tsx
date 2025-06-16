"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe } from "lucide-react"

import BanerPicture from "/public/BanerPicture.png"
import Logo from "/public/coeTechnology-logoo.png"
import Image from "next/image"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Websites That Drive Results"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (

    <main className="bg-gradient-to-br from-[#000035]/10 to-transparent">
      <header className="p-4 md:p-6 lg:p-8">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </header>
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#000035] sm:text-5xl xl:text-6xl/none">
                  We Build <span className="text-[#000035]">{typedText}</span>
                  <span className="animate-blink ml-1">|</span>
                </h1>
                <p className="md:max-w-[600px] md:w-fit w-[300px] text-[#000035]/80 md:text-xl">
                  Our expert team creates custom, high-performance websites that help your business grow and succeed
                  online.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[300px]:flex-row">
                <Button className="bg-[#000035] hover:bg-[#000035]/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#000035] text-[#000035]">
                  View Our Work
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4 text-[#22C55E]" />
                  <span className="text-sm font-medium">Clean Code</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-[#22C55E]" />
                  <span className="text-sm font-medium">Fast Performance</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 text-[#22C55E]" />
                  <span className="text-sm font-medium">SEO Optimized</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22C55E]/20 sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px]" />
                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/20 sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[11/12] w-[400px] h-[250px] overflow-hidden">
                  <Image
                    src={BanerPicture}
                    width={1200}
                    height={700}
                    alt="Web Development"
                    className="rounded-lg h-full w-full object-cover md:object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
