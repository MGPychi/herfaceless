"use client";
import { getStripe } from "@/lib/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { convertToSubCurrency } from "@/lib/convertToSubCurency";
import CheckoutForm from "./CheckoutForm";

const stripePromise = getStripe();
const StripeCheckout = ({ amount }: { amount: number }) => {
	return (
		<Elements
			stripe={stripePromise}
			options={{
				mode: "payment",
				currency: "usd",
				amount: convertToSubCurrency(amount, 100),
			}}
		>
			<CheckoutForm amount={amount} />
		</Elements>
	);
};

export default StripeCheckout;
