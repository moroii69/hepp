
"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, AlertTriangle, ArrowLeft, BarChart2, Calendar, Heart, Home, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Navigation */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">HealthPredict</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="text-sm font-medium flex items-center space-x-2 text-blue-600">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/metrics" className="text-sm font-medium flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Health Metrics</span>
              </Link>
              <Link href="/predictions" className="text-sm font-medium flex items-center space-x-2">
                <BarChart2 className="h-4 w-4" />
                <span>Predictions</span>
              </Link>
              <Link href="/settings" className="text-sm font-medium flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" className="flex items-center space-x-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </div>

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Your Health Dashboard</h1>
            <p className="text-gray-500 mt-2">Monitor your health metrics and predictions</p>
          </div>

          {/* Status Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Health Status</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <p className="text-xs text-muted-foreground">Based on your recent metrics</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Prediction</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Tomorrow</div>
                <p className="text-xs text-muted-foreground">Asthma attack risk: Low</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Last data input: 2 hours ago</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Health Metrics</CardTitle>
                <CardDescription>Input your daily health data</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="blood-glucose" className="text-sm font-medium">
                        Blood Glucose (mg/dL)
                      </label>
                      <input
                        id="blood-glucose"
                        type="number"
                        placeholder="Enter value"
                        className="w-full rounded-md border px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="respiratory-rate" className="text-sm font-medium">
                        Respiratory Rate (breaths/min)
                      </label>
                      <input
                        id="respiratory-rate"
                        type="number"
                        placeholder="Enter value"
                        className="w-full rounded-md border px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Submit Daily Metrics</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Predictions & Alerts</CardTitle>
                <CardDescription>Upcoming health predictions and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="font-medium">Moderate Asthma Risk</p>
                      <p className="text-sm text-muted-foreground">Expected in 3 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Heart className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-medium">Blood Pressure Stable</p>
                      <p className="text-sm text-muted-foreground">Maintain current routine</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trends Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Health Trends</CardTitle>
              <CardDescription>Your health metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="glucose" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="glucose">Blood Glucose</TabsTrigger>
                  <TabsTrigger value="respiratory">Respiratory Rate</TabsTrigger>
                </TabsList>
                <TabsContent value="glucose">
                  <div className="h-[200px] w-full">
                    <BarChart2 className="h-full w-full text-muted-foreground" />
                  </div>
                </TabsContent>
                <TabsContent value="respiratory">
                  <div className="h-[200px] w-full">
                    <BarChart2 className="h-full w-full text-muted-foreground" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-500">© 2024 HealthPredict. All rights reserved.</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}