import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { AlertTriangle, CloudRain, Sun, Thermometer, Wind } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const predictionData = [
  { date: 'Mon', risk: 20 },
  { date: 'Tue', risk: 30 },
  { date: 'Wed', risk: 45 },
  { date: 'Thu', risk: 60 },
  { date: 'Fri', risk: 40 },
  { date: 'Sat', risk: 35 },
  { date: 'Sun', risk: 25 },
]

export default function PredictionRecommendations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Predictions & Recommendations</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Prediction</CardTitle>
            <CardDescription>Based on your recent health data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-10 w-10 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">Moderate Risk</p>
                <p className="text-muted-foreground">Asthma attack within next 48 hours</p>
              </div>
            </div>
            <Progress value={60} className="mt-4" />
            <p className="mt-2 text-sm text-muted-foreground">Risk level: 60%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preventive Suggestions</CardTitle>
            <CardDescription>Actions to reduce your risk</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Use your inhaler as prescribed</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Avoid known triggers (e.g., pollen, dust)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Practice deep breathing exercises</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Stay hydrated</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Environmental Factors</CardTitle>
          <CardDescription>Current conditions that may affect your health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-5 w-5 text-red-500" />
              <span>Temperature: 72°F</span>
            </div>
            <div className="flex items-center space-x-2">
              <CloudRain className="h-5 w-5 text-blue-500" />
              <span>Humidity: 60%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="h-5 w-5 text-gray-500" />
              <span>Air Quality: Moderate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span>Pollen Count: High</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Risk Forecast</CardTitle>
          <CardDescription>Predicted risk levels for the next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="risk" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
          <CardDescription>Customize your risk alert preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="high-risk-alert">High Risk Alerts</Label>
              <Switch id="high-risk-alert" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="moderate-risk-alert">Moderate Risk Alerts</Label>
              <Switch id="moderate-risk-alert" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="low-risk-alert">Low Risk Alerts</Label>
              <Switch id="low-risk-alert" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}