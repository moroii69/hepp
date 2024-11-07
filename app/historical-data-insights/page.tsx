"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Activity, AlertTriangle, ArrowLeft, BarChart2, Heart, Home, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"

const healthData = [
  { date: '2023-01-01', glucose: 120, respiratory: 16, predicted: 30, actual: 25 },
  { date: '2023-01-02', glucose: 115, respiratory: 18, predicted: 35, actual: 40 },
  { date: '2023-01-03', glucose: 125, respiratory: 17, predicted: 40, actual: 35 },
  { date: '2023-01-04', glucose: 118, respiratory: 15, predicted: 25, actual: 30 },
  { date: '2023-01-05', glucose: 122, respiratory: 16, predicted: 30, actual: 28 },
  { date: '2023-01-06', glucose: 130, respiratory: 19, predicted: 45, actual: 50 },
  { date: '2023-01-07', glucose: 128, respiratory: 18, predicted: 40, actual: 38 },
]

export default function HistoricalDataInsights() {
  const [date, setDate] = useState<Date>()

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Historical Data and Insights</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Health Trends</CardTitle>
            <CardDescription>Your health metrics over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="glucose">
              <TabsList>
                <TabsTrigger value="glucose">Blood Glucose</TabsTrigger>
                <TabsTrigger value="respiratory">Respiratory Rate</TabsTrigger>
              </TabsList>
              <TabsContent value="glucose">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="glucose" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="respiratory">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="respiratory" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prediction Accuracy</CardTitle>
            <CardDescription>How well our predictions matched outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span>Overall Accuracy</span>
                  <span className="font-bold">85%</span>
                </div>
                <progress className="w-full" value="85" max="100" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span>Last 7 Days</span>
                  <span className="font-bold">90%</span>
                </div>
                <progress className="w-full" value="90" max="100" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span>Last 30 Days</span>
                  <span className="font-bold">82%</span>
                </div>
                <progress className="w-full" value="82" max="100" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
          <CardDescription>Find specific health data points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="metric">Health Metric</Label>
              <Select>
                <SelectTrigger id="metric">
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="glucose">Blood Glucose</SelectItem>
                  <SelectItem value="respiratory">Respiratory Rate</SelectItem>
                  <SelectItem value="blood-pressure">Blood Pressure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Search health data..." />
            </div>
          </div>
          <Button className="mt-4">Apply Filters</Button>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Comparative View</CardTitle>
          <CardDescription>Predicted risks vs. actual events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="predicted" stroke="#8884d8" name="Predicted Risk" />
                <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual Event" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-end">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Data (CSV)
        </Button>
      </div>
    </div>
</div>
  )
}