"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone , Heart} from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log('Form submitted:', { name, email, subject, message })
    // Reset form fields
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

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
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>123 AI Health Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>support@healthpredict.com</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
              <p>Saturday - Sunday: Closed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.1133274220294!2d78.36738056961498!3d17.34190687911355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95ee6508b3cb%3A0x4d31a552554d00ca!2sLORDS%20INSTITUTE%20OF%20ENGINEERING%20%26%20TECHNOLOGY%2C%20Abhyudaya%20Nagar%2C%20Himayat%20Sagar%20Village%2C%20Hyderabad%2C%20Kismatpur%2C%20Telangana%20500086!5e0!3m2!1sen!2sin!4v1730853440001!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>

  )
}