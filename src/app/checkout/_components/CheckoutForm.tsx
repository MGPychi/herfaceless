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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewsLetterAction } from "@/app/actions/newsletter-actions";

function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
	await createNewsLetterAction({email:email})

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    // Only save email if it's provided and valid
    if (email && isEmailValid) {
      console.log("Saving email:", email);
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message ?? "");
      setIsLoading(false);
      return;
    }

    const { error, ...rest } = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/success`,
        receipt_email: email || undefined, // Only include email if provided
      },
    });

    console.log(error);
    console.log(rest);
    setIsLoading(false);
    if (error) setErrorMessage(error.message ?? "");
  };

  useEffect(() => {
    fetch("/api/checkout_session", {
      method: "POST",
      body: JSON.stringify({
        amount: convertToSubCurrency(amount, 100),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail === "" || validateEmail(newEmail));
  };

  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
        <CardDescription>Enter your email and payment details</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com (optional)"
              value={email}
              onChange={handleEmailChange}
            />
            {email && !isEmailValid && (
              <p className="text-sm text-red-500">Please enter a valid email address or leave it blank</p>
            )}
          </div>
          {clientSecret && <PaymentElement />}
          <Button
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading && "opacity-90"
            } w-full bg-[#a67b5b] hover:bg-[#8b6346]`}
            size="lg"
          >
            {isLoading ? "Processing..." : "Checkout"}
          </Button>
          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default CheckoutForm;

