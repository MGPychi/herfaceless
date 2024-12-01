'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  // const [clientSecret, setClientSecret] = useState('')

  // useState(() => {
    // Create PaymentIntent as soon as the page loads
    // fetch('/api/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: 99700 }), // amount in cents
    // })
      // .then((res) => res.json())
      // .then((data) => setClientSecret(data.clientSecret))
//  } ),
//    [])

  return (
    <div className="min-h-screen bg-[#f8efe8] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Complete Your Membership</h1>
          <p className="text-muted-foreground">Join the Sisters Inner Circle and transform your digital business</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )} */}

          <div className="space-y-8">
            <OrderSummary />
            <MembershipDetails />

          </div>
          <CheckoutForm/>

        </div>
      </div>
    </div>
  )
}

function CheckoutForm() {
  // const stripe = useStripe()
  // const elements = useElements()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()




  }

  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
        <CardDescription>Enter your payment details</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Button
            type="submit"
            className="w-full bg-[#a67b5b] hover:bg-[#8b6346]"
            size="lg"
          >
            Checkout
          </Button>
        </form>
      </CardContent>
    </Card>
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
