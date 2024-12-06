'use server'

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! );

export async function getPaymentIntentDetails(paymentIntentId: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return {
      email: paymentIntent.receipt_email,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    };
  } catch (error) {
    console.error('Error fetching payment intent:', error);
    return null;
  }
}
export async function checkEmailPayment(email: string): Promise<boolean> {
  try {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100, // Adjust as needed
    })

    const paidIntent = paymentIntents.data.find(
      (intent) => 
        intent.status === 'succeeded' && 
        intent.receipt_email === email
    )

    return !!paidIntent
  } catch (error) {
    console.error('Error checking email payment:', error)
    throw new Error('Failed to check payment status')
  }
}



