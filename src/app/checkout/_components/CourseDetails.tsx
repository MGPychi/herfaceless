import { verifyAmountIfExist } from "@/data/pricing-data"


interface Props {
    pricing:Awaited<ReturnType<typeof verifyAmountIfExist >>
}

export default function CourseDetails({pricing}:Props) {



  return (
    <div className="space-y-4 text-sm text-muted-foreground">
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">
          What&apos;s Included in {pricing?.title}:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {pricing?.pricingItems.map((item) => (
            <li key={item.id}>{item.body}</li>
          ))}
        </ul>
      </div>
      <p>
        By completing your purchase, you agree to our Terms of Service
        and Privacy Policy.
      </p>
    </div>
  )
}

