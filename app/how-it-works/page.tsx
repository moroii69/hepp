import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, ChevronRight, ClipboardCheck, LineChart, Shield, User, Heart } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      icon: <User className="h-12 w-12 text-blue-500" />,
      title: "User Input",
      description: "Input your daily health metrics and symptoms through our user-friendly interface or connected devices."
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Data Security",
      description: "Your data is encrypted and securely stored in compliance with HIPAA and GDPR regulations."
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze your data along with environmental factors and medical knowledge."
    },
    {
      icon: <Activity className="h-12 w-12 text-red-500" />,
      title: "Risk Assessment",
      description: "The AI generates a personalized risk assessment for potential health events."
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-yellow-500" />,
      title: "Recommendations",
      description: "Based on the analysis, you receive tailored preventive recommendations and insights."
    },
    {
      icon: <LineChart className="h-12 w-12 text-indigo-500" />,
      title: "Continuous Learning",
      description: "The system continuously learns from new data, improving prediction accuracy over time."
    }
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
      <h1 className="text-3xl font-bold mb-6 text-center">How It Works</h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        Discover how our AI-powered platform predicts and helps prevent health events
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <CardTitle className="text-center">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">{step.description}</CardDescription>
            </CardContent>
            {index < steps.length - 1 && (
              <div className="flex justify-center mb-4">
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-16 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>The Power of AI in Health Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our platform leverages state-of-the-art artificial intelligence and machine learning algorithms to analyze vast amounts of health data. By combining your personal health metrics with broader medical knowledge and environmental factors, we can provide highly accurate predictions and personalized recommendations.
            </p>
            <p>
              The AI model is trained on anonymized data from millions of patients, allowing it to recognize patterns and correlations that might not be immediately apparent to human observers. As you continue to use the platform and input your data, the system becomes even more tailored to your individual health profile, improving its predictive capabilities over time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ensuring Your Privacy and Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We understand the sensitive nature of health data and take extensive measures to ensure your information is protected:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for all data transmission and storage</li>
              <li>Strict access controls and authentication measures</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with HIPAA, GDPR, and other relevant data protection regulations</li>
              <li>Option for users to delete their data at any time</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Empowering You to Take Control of Your Health</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our platform is designed not just to predict health events, but to empower you with the knowledge and tools to take proactive steps in managing your health:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Receive early warnings about potential health risks</li>
              <li>Get personalized recommendations for lifestyle changes and preventive measures</li>
              <li>Track your progress and see the impact of your health decisions over time</li>
              <li>Easily share your health data and insights with your healthcare providers</li>
              <li>Access educational resources tailored to your specific health conditions</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
        <p className="mb-8 text-gray-600">
          Join thousands of users who are already benefiting from our AI-powered health predictions.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/faq">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}