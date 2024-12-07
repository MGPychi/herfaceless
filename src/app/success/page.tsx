import Image from "next/image"
import { Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import CoverImage from "../../../public/cover.webp"
import DownloadBook from "./DownloadBook"
import { sendSuccessEmail } from "../actions/emails-actoins"
import { getPaymentIntentDetails } from "@/data/checkouts-data"
import { redirect } from "next/navigation"
import { changeNewsLetterToPaidOrCreate } from "../actions/newsletter-actions"

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const paymentIntentId = searchParams.payment_intent as string
  const email = searchParams.email as string

  let confirmedEmail: string | null = null

  if (paymentIntentId) {
    const paymentDetails = await getPaymentIntentDetails(paymentIntentId)
    confirmedEmail = paymentDetails?.email || null
  } else if (email) {
    confirmedEmail = email
  } else {
	redirect("/success/verify")
  }

  if (confirmedEmail) {
    await sendSuccessEmail(confirmedEmail)
	await changeNewsLetterToPaidOrCreate({email:confirmedEmail})
  }

  return (
    <main className="min-h-screen bg-[#f8efe8] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-white/50 backdrop-blur-sm">
        <CardContent className="p-6 md:p-12 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#b08b75] rounded-full flex items-center justify-center mb-8 relative">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 6L9 17L4 12"
              />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-white" />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-[#2d2d2d]">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your digital empire journey begins now!
          </p>

          <div className="relative h-[300px] w-[220px] max-w-sm aspect-square mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={CoverImage}
              alt="Digital Course Cover"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2     w-full max-w-md">
            <DownloadBook />
            <Link
              target="_blank"
              href="https://discord.gg/tZrh4Czmt9"
            >
              <Button
                variant="outline"
                className="w-full h-12 text-lg border-[#7289da] text-[#7289da] hover:bg-[#7289da] hover:text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground">
              Having trouble? Contact our support team at
              herfacelessmarketing1@gmail.com
            </p>
          </div>
        </CardContent>
      </Card>

    </main>
  )
}

