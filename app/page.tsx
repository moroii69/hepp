import { Button } from "@/components/ui/button"
import { Heart, Brain, Shield, ArrowRight, BarChart3, Activity } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">HealthPredict</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6 justify-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/user-dashboard">
              Dashboard
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6 flex justify-center">
          <div className="flex flex-col items-center space-y-4 text-center max-w-3xl">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center">
                Predict Health Events, Prevent Complications
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                HealthPredict uses AI to help chronic condition patients anticipate health events and take preventive action.
              </p>
            </div>
            <div className="space-x-4 flex justify-center">
              <Link href="/auth/signup" passHref>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works" passHref>
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <Brain className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">AI-Powered Predictions</h3>
                <p className="text-sm text-gray-500">Advanced algorithms analyze your health data to predict potential risks.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <Shield className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Preventive Suggestions</h3>
                <p className="text-sm text-gray-500">Receive personalized recommendations to mitigate health risks.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <BarChart3 className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Data Analysis</h3>
                <p className="text-sm text-gray-500">Comprehensive analysis of your health trends and patterns.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">1</div>
                <h3 className="text-xl font-bold">Input Your Data</h3>
                <p className="text-sm text-gray-500">Securely enter your health information and daily metrics.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">2</div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-sm text-gray-500">Our advanced AI analyzes your data to identify potential risks.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg text-center max-w-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">3</div>
                <h3 className="text-xl font-bold">Get Insights</h3>
                <p className="text-sm text-gray-500">Receive personalized predictions and preventive recommendations.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 flex items-center justify-center">
          <div className="container px-4 md:px-6 flex justify-center">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                  Take Control of Your Health Today
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                  Join HealthPredict and start your journey towards better health management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 flex justify-center">
                <Link href="/auth/signup" passHref>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Sign Up Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">© 2024 HealthPredict. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 justify-center">
            <Link className="text-xs hover:underline underline-offset-4" href="/terms-privacy">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}