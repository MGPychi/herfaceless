import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
})

export async function POST(req: Request) {
  const { amount } = await req.json()

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
	  automatic_payment_methods:{enabled:true},
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating PaymentIntent' }, { status: 500 })
  }
}




// export async function POST(req: Request) {
//   try {
//     const { price } = await req.json()

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Digital Course Access',
//               description: 'Full access to the Ultimate Faceless Digital Course',
//             },
//             unit_amount: price * 100, // Convert to cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
//     })

//     return NextResponse.json({ sessionId: session.id })
//   } catch (error) {
//     console.error('Error:', error)
//     return NextResponse.json(
//       { error: 'Error creating checkout session' },
//       { status: 500 }
//     )
//   }
// }

