import * as motion from "framer-motion/m"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Mic, Database, Pen, MessageSquare, Briefcase, Lightbulb, Star, FileCode } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Monthly Access to Passion to Profit Course",
    value: 1997,
    description: "The only system you need to create, launch, and sell digital products from scratch.",
    darkBg: true
  },
  {
    icon: Mic,
    title: "Monthly Training with Guest Speaker",
    value: 497,
    description: "Exclusive monthly sessions with expert coaches, where you'll gain valuable insights.",
    darkBg: false
  },
  {
    icon: Database,
    title: "Bonus: Ready to Sell Digital Product",
    value: 2997,
    description: "The only system you need to create, launch, and sell digital products from scratch.",
    darkBg: true
  },
  {
    icon: Pen,
    title: "Membership Creation Lesson",
    value: 297,
    description: "A step-by-step guide to build and launch your own membership site.",
    darkBg: false
  },
  {
    icon: MessageSquare,
    title: "Weekly Q&A on Community Group",
    value: 1997,
    description: "Offer quick answers, expert tips, and lively discussions within the community.",
    darkBg: true
  },
  {
    icon: Briefcase,
    title: "Bonus: Social Media Marketing Mastery",
    value: 297,
    description: "A step-by-step guide to selling your products on social media.",
    darkBg: false
  },
  {
    icon: Lightbulb,
    title: "Monthly Group Coaching Lesson",
    value: 2997,
    description: "A more intimate session focused on direct coaching, tackling participants' challenges, goals, and progress.",
    darkBg: true
  },
  {
    icon: Star,
    title: "Sisterhood Growth Community",
    value: 1997,
    description: "A place for you to share experiences, resources, and encouragement to foster growth.",
    darkBg: false
  },
  {
    icon: FileCode,
    title: "Bonus: Product Launch Blueprint",
    value: 397,
    description: "Everything you need to launch your product with confidence and success.",
    darkBg: true
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
export default function FeaturesGrid() {

  const totalValue = features.reduce((acc, feature) => acc + feature.value, 0)

  return (
    <div className="min-h-screen bg-ground py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          THIS IS WHAT&apos;S INCLUDED
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full transition-transform hover:scale-105 ${
                feature.darkBg ? 'bg-black text-white' : 'bg-white text-black'
              }`}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <feature.icon className="h-10 w-10" />
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-lg font-bold">(Value: ${feature.value})</p>
                  <p className="text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="text-2xl md:text-3xl font-bold">
            TOTAL VALUE: <span className="text-green-500">${totalValue.toLocaleString()}+</span>
          </div>
          
          <Button 
          aria-label="get started button"
            className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-md"
          >
            GET STARTED TODAY!
          </Button>
        </motion.div>
      </div>
    </div>
  )
}