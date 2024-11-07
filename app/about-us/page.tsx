import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Heart, Lightbulb, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  const teamMembers = [
    { name: "Dr. Jane Smith", role: "Founder & CEO", image: "/placeholder.svg?height=200&width=200" },
    { name: "John Doe", role: "Chief Technology Officer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Emily Brown", role: "Chief Medical Officer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Michael Johnson", role: "Head of AI Research", image: "/placeholder.svg?height=200&width=200" },
  ]

  const values = [
    { icon: <Heart className="h-8 w-8 text-red-500" />, title: "Compassion", description: "We put our users' health and well-being at the heart of everything we do." },
    { icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, title: "Innovation", description: "We constantly push the boundaries of AI and healthcare technology." },
    { icon: <Shield className="h-8 w-8 text-blue-500" />, title: "Integrity", description: "We uphold the highest standards of data privacy and ethical practices." },
    { icon: <Users className="h-8 w-8 text-green-500" />, title: "Collaboration", description: "We work closely with healthcare providers and researchers to improve outcomes." },
  ]

  return (
    <div className="flex flex-col min-h-screen">
    <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
      <div className="container flex items-center justify-between">
      <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900" >HealthPredict</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 justify-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About HealthPredict</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At HealthPredict, our mission is to empower individuals to take control of their health through cutting-edge AI technology. We believe that by providing accurate predictions and personalized insights, we can help prevent health events and improve overall well-being.
        </p>
        <p className="text-lg mb-4">
          Founded in 2020, HealthPredict has quickly become a leader in AI-powered health prediction. Our team of expert data scientists, medical professionals, and software engineers work tirelessly to develop and refine our prediction models, ensuring the highest level of accuracy and reliability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {value.icon}
                  <CardTitle>{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Award className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="font-semibold text-lg">Healthcare Innovation Award 2023</h3>
                <p className="text-gray-600">Recognized for our groundbreaking AI technology in health prediction</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us in Shaping the Future of Healthcare</h2>
        <p className="text-lg mb-6">
          Experience the power of AI-driven health predictions and take control of your well-being today.
        </p>
        <Button asChild size="lg">
          <Link href="/signup">Get Started with HealthPredict</Link>
        </Button>
      </section>
    </div>
    </div>
  )
}