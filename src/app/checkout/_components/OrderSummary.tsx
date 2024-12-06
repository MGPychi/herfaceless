import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { z } from 'zod'
import { selectPricingSchema } from '@/db/schema'

interface Props {
    pricing:z.infer<typeof selectPricingSchema>
}

function OrderSummary({pricing}:Props) {


  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>
          Review your membership details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>{pricing.title}</span>
          <span className="font-semibold">${pricing.price.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${pricing.price.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderSummary

