'use client'
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { getStripe } from "@/lib/stripe"
import { useState } from "react"
import { Elements} from '@stripe/react-stripe-js'
import { convertToSubCurrency } from "@/lib/convertToSubCurency"
import CheckoutForm from "./_components/CheckoutForm"

const stripePromise = getStripe()
export default function CheckoutPage() {
  // const [clientSecret, setClientSecret] = useState('')
  const amount = 29
   useState(() => {
    // // Create PaymentIntent as soon as the page loads
    // fetch('/api/checkout_session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: 44 }), // amount in cents
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return (
    <div className="min-h-screen bg-[#f8efe8] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Complete Your Membership</h1>
          <p className="text-muted-foreground">Join the Sisters Inner Circle and transform your digital business</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
           <Elements stripe={stripePromise} options={{
            mode:'payment',
            currency: 'usd',
            amount: convertToSubCurrency(amount,100),

            }}>
              <CheckoutForm amount={amount} />
            </Elements>

          <div className="space-y-8">
            <OrderSummary />
            <MembershipDetails />

          </div>

        </div>
      </div>
    </div>
  )
}

function OrderSummary() {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>Review your membership details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>The ultimate digital marketing course</span>
          <span className="font-semibold">$997</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$997</span>
        </div>
      </CardContent>
    </Card>
  )
}

function MembershipDetails() {
  return (
    <div className="space-y-4 text-sm text-muted-foreground">
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">What&apos;s Included:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Expert Insights WEEKLY</li>
          <li>Strategic Implementation Plans</li>
          <li>Revenue Acceleration Tactics</li>
          <li>Business & Personal Growth Resources</li>
          <li>Exclusive Content Access</li>
        </ul>
      </div>
      <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
    </div>
  )
}
