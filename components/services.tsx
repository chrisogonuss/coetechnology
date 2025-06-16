import { Check, Code, Smartphone, Gauge, Search, Paintbrush, Headphones } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-[#000035]" />,
      title: "Web Development",
      description: "Custom websites built with the latest technologies for optimal performance and user experience.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#000035]" />,
      title: "Responsive Design",
      description: "Mobile-friendly websites that look great and function perfectly on all devices and screen sizes.",
    },
    {
      icon: <Gauge className="h-12 w-12 text-[#000035]" />,
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and improved search engine rankings.",
    },
    {
      icon: <Search className="h-12 w-12 text-[#000035]" />,
      title: "SEO Services",
      description: "Optimize your website to rank higher in search results and attract more organic traffic.",
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-[#000035]" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
    },
    {
      icon: <Headphones className="h-12 w-12 text-[#000035]" />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website secure, updated, and running smoothly.",
    },
  ]

  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#111827]/70">
            We offer a comprehensive range of web development services to help your business succeed online.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#111827]/70">{service.description}</CardDescription>
                <ul className="mt-4 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#22C55E]" />
                      <span className="text-sm text-[#111827]/70">Feature {item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
