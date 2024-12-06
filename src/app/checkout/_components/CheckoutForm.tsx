"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { convertToSubCurrency } from "@/lib/convertToSubCurency";

function CheckoutForm({amount}:{amount:number}) {
	const stripe = useStripe();
	const elements = useElements();
    const [isLoading,setIsLoading]= useState(false)
    const [errorMessage,setErrorMessage]=useState("")
	const [clientSecret, setClientSecret] = useState("");
	const handleSubmit = async (e: React.FormEvent) => {
        setIsLoading(true)
		e.preventDefault();
        if(!stripe||!elements){
            return;
        }
        const {error:submitError} = await elements.submit();
        if(errorMessage){
            setErrorMessage(submitError?.message??"")
            setIsLoading(false)
            return 
        }
        const {error,...rest} = await stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams:{
                return_url:`http://localhost:3000/success-0jfkaln2sfs`
            },

        })

		console.log(error)
		console.log(rest)
		setIsLoading(false)
        if(error)setErrorMessage(error.message??"")
			
	};
	useEffect(() => {
		fetch("/api/checkout_session", { method: "POST",body:JSON.stringify({
            amount:convertToSubCurrency(amount,100)
        } )})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [amount]);

	return (
		<Card className="bg-white/80  backdrop-blur">
			<CardHeader>
				<CardTitle>Payment Information</CardTitle>
				<CardDescription>Enter your payment details</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-6">
                    {clientSecret&&<PaymentElement/>}
                    
					<Button
					disabled={isLoading}
						type="submit"
						className={ `${isLoading&&"opacity-90"} w-full bg-[#a67b5b] hover:bg-[#8b6346]  ` }
						size="lg"
					>
						Checkout
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

export default CheckoutForm;
