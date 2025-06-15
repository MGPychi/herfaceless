import * as motion from "framer-motion/m"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Mic, Database, Pen, MessageSquare, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: FileText,
    title: "+10 digital products MRR ",
    value: 197,
    description: "Get ready-made digital product for you ready to sell (save your time).",
    image: "/bonus1.png",
    backgroundColor: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    icon: Mic,
    title: "20+ Low-Competition Niches ",
    value: 37,
    description: "Top 20 niches in for digital products  Low-Competition",
    image: "/bonus2.png",
    backgroundColor: "bg-gradient-to-br from-purple-50 to-purple-100"
  },
  {
    icon: Database,
    title: "Canva Crash Course MRR ",
    value: 97,
    description: "Get ready-made digital product for you ready to sell",
    image: "/bonus3.png",
    backgroundColor: "bg-gradient-to-br from-pink-50 to-pink-100"
  },
  {
    icon: Pen,
    title: "Community Access ",
    value: 397,
    description: "Access lifetime membership to My community and support.",
    image: "/bonus4.png",
    backgroundColor: "bg-gradient-to-br from-amber-50 to-amber-100"
  },
  {
    icon: MessageSquare,
    title: "High-Converting Story Templates ",
    value: 97,
    description: "Get 5x views in your story",
    image: "/bonus5.png",
    backgroundColor: "bg-gradient-to-br from-green-50 to-green-100"
  },
  {
    icon: Briefcase,
    title: "+850 faceless reels ",
    value: 47,
    description: "Get ready-made digital product for you ready to sell (save your time).",
    image: "/bonus6.png",
    backgroundColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturesGrid() {
  const totalValue = features.reduce((acc, feature) => acc + feature.value, 0)

  return (
    <section className="min-h-screen bg-ground py-2 sm:py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-4 md:space-y-12">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-secondary py-2  text-white my-4 font-bold rounded-full px-8 ">
            Bonus
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl my-2 font-bold text-center text-gray-900"
          >
            Comes with lifetime access.
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl my-2 font-bold text-center text-gray-900"
          >
            Join now and get all these bonuses included.
          </motion.span>
        </div>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <BonusCard
                title={feature.title}
                totalValue={feature.value}
                bonusNumber={index + 1}
                description={feature.description}
                backgroundColor={feature.backgroundColor}
                image={feature.image}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2 pt-4 md:pt-0"
        >
          <div className="text-xl del md:text-2xl font-bold text-gray-900">
            Total  Value  <span className="">${(totalValue).toLocaleString()}+</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">
            Today only  <span className="">$37</span>
          </div>

          <Link href={"/#pricing"} className="block">
            <Button
              aria-label="get started button"
              className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-lg"
            >
              Enroll TODAY
            </Button>
          </Link>
          <p className="mt-4 text-sm sm:text-base italic  text-slate-700 max-w-lg md:max-w-xl mx-auto mt-4">
            and claim all the bonuses...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

interface BonusCardProps {
  bonusNumber: number
  title: string
  totalValue: number
  description: string
  image?: string
  backgroundColor?: string
  textColor?: string
}

export function BonusCard({
  bonusNumber,
  title,
  totalValue,
  description,
  image,
  textColor = "text-gray-900",
}: BonusCardProps) {
  return (
    <motion.div variants={item} className="h-full w-full">
      <Card className="w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 rounded-xl flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Image Section */}
          {image && (
            <div className="relative   h-48 w-full flex-shrink-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {/* Content Section */}
          <div className={`bg-secondary text-white ${textColor} p-6 flex flex-col flex-grow`}>
            {/* Bonus Label
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-gray-100">Value: ${totalValue}</span>
            </div>
              */}

            {/* Title */}
            <h3 className="text-lg font-bold leading-tight mb-3">Bonus {bonusNumber} <span className="font-bold"> {title} {}</span>
              <span className=" text-base text-gray-100">
                (Total Value:{totalValue})
              </span>
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-50 leading-relaxed flex-grow">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
