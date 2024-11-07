import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How does the health prediction system work?",
    answer: "Our AI-powered system analyzes your daily health metrics and environmental factors to predict potential health events. It uses machine learning algorithms trained on vast amounts of medical data to provide personalized insights and recommendations."
  },
  {
    question: "How often should I input my health data?",
    answer: "For the most accurate predictions, we recommend inputting your health data daily. However, the frequency may vary depending on your specific health condition and your healthcare provider's recommendations."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, we take data security very seriously. All your health data is encrypted and stored securely. We comply with HIPAA regulations and other relevant data protection laws to ensure your information remains confidential."
  },
  {
    question: "Can I share my health predictions with my doctor?",
    answer: "You can generate reports of your health data and predictions to share with your healthcare provider. This can help them make more informed decisions about your care."
  },
  {
    question: "What should I do if I receive a high-risk prediction?",
    answer: "If you receive a high-risk prediction, don't panic. Review the preventive suggestions provided by the system. If you're concerned, contact your healthcare provider immediately or seek emergency care if necessary."
  }
]

export default function FAQHelp() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">FAQ & Help Center</h1>
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about our platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
          <CardDescription>Contact our support team or check out our resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>If you couldn't find the answer you were looking for, please don't hesitate to reach out to our support team.</p>
            <div>
              <strong>Email:</strong> support@healthprediction.com
            </div>
            <div>
              <strong>Phone:</strong> 1-800-HEALTH-AI (1-800-432-5842)
            </div>
            <div>
              <strong>Hours:</strong> Monday - Friday, 9am - 5pm EST
            </div>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Learn more about chronic conditions and preventive care</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">Understanding Your Health Metrics</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">Tips for Managing Chronic Conditions</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">The Importance of Preventive Care</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">How AI is Transforming Healthcare</Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}