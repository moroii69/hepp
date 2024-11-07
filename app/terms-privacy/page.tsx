import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function TermsPrivacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
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
        <h1 className="text-2xl font-bold mb-6">Terms & Conditions and Privacy Policy</h1>
        <Tabs defaultValue="terms">
          <TabsList className="mb-4">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>
          <TabsContent value="terms">
            <Card>
              <CardHeader>
                <CardTitle>Terms of Service</CardTitle>
                <CardDescription>Please read our terms of service carefully</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing or using the Health Prediction Platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
                  <p className="mb-4">
                    The Health Prediction Platform provides AI-powered health predictions and recommendations based on user-inputted data. Our service is not a substitute for professional medical advice, diagnosis, or treatment.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">3. User Responsibilities</h2>
                  <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">4. Privacy and Data Protection</h2>
                  <p className="mb-4">
                    We are committed to protecting your privacy and handling your data in accordance with applicable data protection laws, including HIPAA and GDPR. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">5. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the fullest extent permitted by applicable law, the Health Prediction Platform and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the services.
                  </p>

                  {/* Add more sections as needed */}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy</CardTitle>
                <CardDescription>Learn how we collect, use, and protect your data</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect personal information that you provide directly to us, such as your name, email address, and health-related data. We also collect data about your use of our services and device information.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use your information to provide and improve our services, communicate with you, and comply with legal obligations. Your health data is used to generate predictions and recommendations.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">3. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">4. HIPAA Compliance</h2>
                  <p className="mb-4">
                    As a health service provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA). We maintain physical, electronic, and procedural safeguards that ensure the confidentiality and security of your health information in accordance with HIPAA requirements.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">5. Your Rights</h2>
                  <p className="mb-4">
                    You have the right to access, correct, or delete your personal data. You can also request a copy of the data we hold about you and withdraw your consent for certain data processing activities at any time.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">6. Third-Party Services</h2>
                  <p className="mb-4">
                    We may share your data with trusted third-party service providers who assist us in operating our services. These third parties are required to keep your information secure and to use it solely for the purposes of providing services on our behalf.
                  </p>

                  <h2 className="text-lg font-semibold mb-2">7. Changes to the Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be communicated to you, and the revised policy will be effective upon publication.
                  </p>

                  {/* Add more sections as needed */}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
