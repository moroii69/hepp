"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Heart} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HealthMetricsInput() {
  const [date, setDate] = useState<Date>();
  const [bloodGlucose, setBloodGlucose] = useState<number | string>("");
  const [respiratoryRate, setRespiratoryRate] = useState<number | string>("");
  const [bloodPressureSystolic, setBloodPressureSystolic] = useState<number | string>("");
  const [bloodPressureDiastolic, setBloodPressureDiastolic] = useState<number | string>("");
  const [heartRate, setHeartRate] = useState<number | string>("");
  const [oxygenSaturation, setOxygenSaturation] = useState<number | string>("");
  const [notes, setNotes] = useState<string>("");

  // Asynchronous submit handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");

    // Get token from localStorage
    const token = localStorage.getItem("authToken"); // Or sessionStorage depending on where the token is stored

    if (!token) {
      console.error("No authentication token found.");
      return;
    }

    // Prepare health metrics data
    const healthMetricsData = {
      date,
      bloodGlucose,
      respiratoryRate,
      bloodPressureSystolic,
      bloodPressureDiastolic,
      heartRate,
      oxygenSaturation,
      notes,
    };

    try {
      // Sending the data to the API
      const response = await fetch("http://localhost:5000/api/health-metrics/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
        body: JSON.stringify(healthMetricsData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Health metrics submitted successfully", data);
        alert('Health metrics submitted successfully!');
      } else {
        console.error("Error submitting health metrics", data);
        alert('Error submitting health metrics.');
      }
    } catch (error) {
      console.error("Error:", error);
      alert('There was an error submitting the health metrics.');
    }
  };

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

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Health Metrics Input</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="blood-glucose">Blood Glucose (mg/dL)</Label>
            <Input
              id="blood-glucose"
              type="number"
              placeholder="Enter blood glucose level"
              value={bloodGlucose}
              onChange={(e) => setBloodGlucose(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="respiratory-rate">Respiratory Rate (breaths/min)</Label>
            <Input
              id="respiratory-rate"
              type="number"
              placeholder="Enter respiratory rate"
              value={respiratoryRate}
              onChange={(e) => setRespiratoryRate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="blood-pressure-systolic">Blood Pressure - Systolic (mmHg)</Label>
            <Input
              id="blood-pressure-systolic"
              type="number"
              placeholder="Enter systolic blood pressure"
              value={bloodPressureSystolic}
              onChange={(e) => setBloodPressureSystolic(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="blood-pressure-diastolic">Blood Pressure - Diastolic (mmHg)</Label>
            <Input
              id="blood-pressure-diastolic"
              type="number"
              placeholder="Enter diastolic blood pressure"
              value={bloodPressureDiastolic}
              onChange={(e) => setBloodPressureDiastolic(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heart-rate">Heart Rate (bpm)</Label>
            <Input
              id="heart-rate"
              type="number"
              placeholder="Enter heart rate"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="oxygen-saturation">Oxygen Saturation (%)</Label>
            <Input
              id="oxygen-saturation"
              type="number"
              placeholder="Enter oxygen saturation"
              value={oxygenSaturation}
              onChange={(e) => setOxygenSaturation(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Enter any additional symptoms or comments"
            className="h-24"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save for Later
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Connect Wearable Devices</h2>
        <p className="text-muted-foreground mb-4">
          You can connect your wearable devices to automatically import health data.
        </p>
        <Button>Connect Device</Button>
      </div>
    </div>
    </div>
  );
}
