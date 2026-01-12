"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

import butterfly from "/public/butterfly.png"
import topMercy from "/public/topmercy.png"
import DeeChepsen from "/public/DeeChepsen.png"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Butterfly AI",
      category: "web",
      image: butterfly,
      description: "An AI image and video generator",
      link: "https://ai.eezdra.com/"
    },
    {
      id: 2,
      title: "Top Mercy School",
      category: "web",
      image: topMercy,
      description: "A school website",
      link: "https://topmercyschools.com/"
    },
    {
      id: 3,
      title: "Dee-Chepsen School",
      category: "web",
      image: DeeChepsen,
      description: "A school website",
      link: "https://www.deechepsenschool.com.ng/"
    }
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#111827]/70">
            Check out some of our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            {/* <TabsList className="mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            </TabsList> */}
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-none shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-[200px] w-full object-cover"
                      width={1200}
                      height={700}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div className="absolute bottom-4 left-4 right-4">
                      <Link href={project.link}>
                        <Button variant="secondary" size="sm" className="w-full">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-bold text-[#111827]">{project.title}</h3>
                    <p className="text-sm text-[#111827]/70">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* <div className="mt-12 text-center">
          <Button className="bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}
