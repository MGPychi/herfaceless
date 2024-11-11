import * as motion from "framer-motion/m"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Standard",
    price: 127,
    commitment: "3 Months Commitment",
    features: [
      "Weekly Group Coaching of the Passion to Profit Course with Alaa",
      "Full Access of Passion to Profits Course",
      "Fortnightly Q & A with Alaa",
      "Weekly Lesson Workbook",
      "2 x DFY Monthly Email Templates",
      "1 x Weekly Content Prompt",
      "Access to the Sisters In Success Community"
    ],
    cta: "Sign me up!"
  },
  {
    name: "VIP",
    price: 300,
    commitment: "3 Months Commitment",
    features: [
      "Weekly Group Coaching of the Passion to Profit Course with Alaa",
      "Full Access of Passion to Profits Course",
      "Weekly Q & A with Alaa",
      "Weekly Lesson Workbook",
      "Weekly Q & A with Alaa",
      "6 x DFY Monthly Email Templates",
    ],
    cta: "This is for me!"
  },{
    name: "Platinum",
    price: 500,
    commitment: "3 Months Commitment",
    features: [
      "Weekly Group Coaching of the Passion to Profit Course with Alaa",
      "Full Access of Passion to Profits Course",
      "Weekly Q & A with Alaa",
      "Weekly Lesson Workbook",
      "Weekly Q & A with Alaa",
      "6 x DFY Monthly Email Templates",
      "1 x Weekly Content Prompt",
      "Access to the Sisters In Success Community",
      "1 x 1 Coaching Session with Alaa"
    ],
    cta: "I'm Ready!"
  }
]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
export default function Pricing() {

  return (
    <div className="min-h-screen bg-[#f3e4d7] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container  mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Find your <span className="text-[#b17f65]">Perfect Plan!</span>
        </h1>
      </motion.div>

      <div className=" container mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.commitment}</p>
                <p className="text-sm text-muted-foreground">(Billed Monthly)</p>
                <div className="text-4xl font-bold mt-4">
                  <span className="text-[#b17f65]">${plan.price}</span>
                  <span className="text-xl font-normal">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  className="space-y-4"
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li key={featureIndex} variants={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#b17f65] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-[#dbc1b0] hover:bg-[#b17f65] text-black py-6 text-lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}