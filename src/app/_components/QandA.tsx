import * as motion from 'framer-motion/m'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Heart } from "lucide-react"

const comparisonItems = [
  {
    title: "Customized Learning Experience",
    content: "Our program adapts to your unique needs and learning style, ensuring you get the most value from every session and resource we provide."
  },
  {
    title: "Practical, Actionable Guidance, and Simplicit",
    content: "We break down complex concepts into simple, actionable steps that you can implement immediately in your business."
  },
  {
    title: "Real-Time Support and Feedback",
    content: "Our live Q&A sessions and community support mean you're never alone. Get real-time feedback on your ideas and challenges, ensuring that you're always on the right track and can overcome any obstacles with expert advice."
  },
  {
    title: "Family-Focused Financial Freedom",
    content: "We understand the unique challenges of balancing business growth with family life, and our program is designed to help you achieve both."
  },
  {
    title: "Real-Life Impact",
    content: "Our members don't just learn theory – they implement strategies that create tangible results in their businesses and lives."
  },
  {
    title: "Exclusive Access to Resources",
    content: "Get access to tools, templates, and resources that are not available anywhere else, giving you a competitive edge in your industry."
  },
  {
    title: "Community and Sisterhood",
    content: "Join a supportive community"
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

  const motionItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
export default function QandA() {


  return (
    <div className="min-h-screen bg-ground  py-20 px-4">
      <div className="max-w-screen-md mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            SISTERS INNER CIRCLE MEMBERSHIP
            <br />
            VS OTHERS
          </h2>
          <p className="text-gray-600">
            How our membership programs differ from others:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {comparisonItems.map((item, index) => (
              <motion.div key={index} variants={motionItem}>
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 rounded-lg">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="text-lg">
            Join now to start making a real difference in your life and your loved ones{' '}
            <Heart className="inline-block h-5 w-5 text-red-500 fill-current" />
          </p>
          
          <Button 
          aria-label='i want button'
            className="bg-[#dbc1b0] hover:bg-[#b17f65] text-black px-8 py-6 text-lg rounded-md"
          >
            I WANT!!
          </Button>
        </motion.div>
      </div>
    </div>
  )
}