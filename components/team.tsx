import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

import victor from "/public/victor.jpeg"
import Chrisogonus from "/public/Chrisogonus.jpeg"   
import Francis from "/public/Francis.jpg"
import Tya from "/public/Tya.jpg"

export default function Team() {
  const team = [
    {
      name: "Chrisogonus Ejiogu",
      role: "CEO",
      image: Chrisogonus,
      bio: "",
    },
    {
      name: "Francis Uzor",
      role: "Project Manager",
      image: Francis,
      bio: "",
    },
    {
      name: "Tya Nagasaki ",
      role: "Graphics Designer",
      image: Tya,
      bio: "",
    },
    {
      name: "Ifeanyi Mbah",
      role: "Software Developer",
      image: victor,
      bio: "",
    },
  ]

  return (
    <section className="bg-gray-50 py-20" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#111827]/70">
            Our talented team of professionals is dedicated to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={750}
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#111827]">{member.name}</h3>
                <p className="mb-2 text-sm font-medium text-[#1D4ED8]">{member.role}</p>
                <p className="mb-4 text-sm text-[#111827]/70">{member.bio}</p>
                {/* <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-[#1D4ED8] hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-[#1D4ED8] hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-[#1D4ED8] hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
