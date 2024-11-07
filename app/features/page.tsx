import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, BarChart2, Bell, Brain, Lock, Smartphone, Sliders, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Predictions",
      description: "Leverage advanced machine learning algorithms to predict potential health events with high accuracy."
    },
    {
      icon: <Activity className="h-8 w-8 text-green-500" />,
      title: "Personalized Health Insights",
      description: "Receive tailored health recommendations based on your unique health profile and lifestyle."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
      title: "Comprehensive Data Analysis",
      description: "Visualize your health trends and gain insights from in-depth analysis of your health metrics."
    },
    {
      icon: <Bell className="h-8 w-8 text-red-500" />,
      title: "Real-time Alerts",
      description: "Get timely notifications about potential health risks and preventive actions to take."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-yellow-500" />,
      title: "Multi-device Compatibility",
      description: "Access your health data and predictions seamlessly across all your devices."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Healthcare Provider Integration",
      description: "Easily share your health insights with your doctors for more informed care decisions."
    },
    {
      icon: <Lock className="h-8 w-8 text-gray-500" />,
      title: "Advanced Data Security",
      description: "Rest easy knowing your health data is protected with state-of-the-art encryption and security measures."
    },
    {
      icon: <Sliders className="h-8 w-8 text-orange-500" />,
      title: "Customizable Dashboard",
      description: "Tailor your health monitoring experience with a fully customizable user interface."
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
      <h1 className="text-3xl font-bold mb-6 text-center">Platform Features</h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        Discover the powerful features that make our Health-Event Prediction Platform unique
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-center">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Key Features in Detail</h2>
        <Tabs defaultValue="predictions" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
            <TabsTrigger value="insights">Health Insights</TabsTrigger>
            <TabsTrigger value="security">Data Security</TabsTrigger>
          </TabsList>
          <TabsContent value="predictions">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Health Predictions</CardTitle>
                <CardDescription>Harness the power of artificial intelligence for proactive health management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our advanced AI algorithms analyze your health data to predict potential health events with remarkable accuracy. By leveraging machine learning and vast medical databases, we provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Early detection of potential health risks</li>
                  <li>Personalized risk assessments for various health conditions</li>
                  <li>Trend analysis to identify patterns in your health data</li>
                  <li>Continuous learning and improvement of predictions over time</li>
                </ul>
                <p>With our AI-powered predictions, you can take proactive steps to maintain your health and prevent potential issues before they arise.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Health Insights</CardTitle>
                <CardDescription>Gain deep understanding of your health with tailored analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our platform goes beyond simple data tracking to provide you with meaningful, actionable insights about your health:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customized health recommendations based on your unique profile</li>
                  <li>Detailed analysis of your health metrics and their correlations</li>
                  <li>Interactive visualizations to help you understand your health trends</li>
                  <li>Personalized goal setting and progress tracking</li>
                  <li>Educational content tailored to your specific health conditions</li>
                </ul>
                <p>With these personalized insights, you'll be empowered to make informed decisions about your health and lifestyle.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Data Security</CardTitle>
                <CardDescription>Your health data is protected with industry-leading security measures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We understand the sensitive nature of health data and have implemented robust security measures to ensure your information remains private and secure:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for all data transmission and storage</li>
                  <li>Compliance with HIPAA, GDPR, and other relevant data protection regulations</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Strict access controls and authentication measures</li>
                  <li>Data anonymization techniques for AI model training</li>
                  <li>Transparent data usage policies and user control over data sharing</li>
                </ul>
                <p>With our advanced security features, you can trust that your health information is safe and your privacy is respected.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience These Features?</h2>
        <p className="mb-8 text-gray-600">
          Join our platform today and start benefiting from AI-powered health predictions and insights.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/auth/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}