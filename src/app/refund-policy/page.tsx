import Footer from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from 'lucide-react'
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <>
    <main className="min-h-screen bg-ground flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold">Refund Policy</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Our commitment to quality and transparency
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-stone mx-auto">
            <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
              At HersFaceless.com, we are confident in the value of our digital products and services. For this reason, we do
              not offer refunds for one-time purchases. We encourage you to review the product details carefully before
              making a purchase, as all sales are final.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 text-center">
              <p className="text-lg">
                If you have any questions prior to purchasing, feel free to reach out to us at{" "}
                <Link
                  href="mailto:contact@hersfaceless.com"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  contact@hersfaceless.com
                </Link>
                . We&apos;re here to help!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
    <Footer/>
    </>
  )
}
