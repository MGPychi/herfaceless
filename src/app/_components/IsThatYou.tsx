import * as motion from "framer-motion/m"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const painPoints = [
  "You've tried creating digital products before but ended up feeling frustrated and stuck.",
  "You have a passion or skill you want to monetize, but you're not sure where to start.",
  "You're tired of piecing together free resources and want a clear, proven path to success.",
  "You want to create a sustainable income stream that allows you to focus on what you love.",
  "Constant worry about not having enough money to cover bills or invest in opportunities.",
  "Feeling stuck and unfulfilled, knowing you have skills or passions but not knowing how to turn them into income.",
  "Struggling with where to start or how to effectively market and sell your digital products.",
  "Doubts about your ability to succeed in the digital product space, leading to inaction.",
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

export default function IsThatYou() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e4d7] to-[#e5d0ba] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="border-none bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#b17f65]">Is this you?</h2>
              <p className="text-lg text-gray-600">Identify your challenges and take the first step towards success</p>
            </motion.div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 bg-[#f9f1ea] p-4 rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-6 w-6 text-[#b17f65] mt-1 flex-shrink-0" />
                  <span className="text-gray-800">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-[#b17f65] text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">The Solution You have Been Waiting For</h3>
                <p className="text-lg">
                  Our <span className="font-bold">Sisters Inner Circle Membership</span> process is the secret sauce that will help you ditch the confusion and craft a profitable digital product that sells like hotcakes.
                </p>
              </div>

              <div className="flex justify-center">
                <Button 
                  className="bg-[#b17f65] hover:bg-[#a06c55] text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <span>I&apos;M READY NOW!</span>
                  <CheckCircle2 className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}