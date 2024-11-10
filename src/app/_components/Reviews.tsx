'use client'

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, DollarSign, Zap } from "lucide-react"
import { useInView, animated, useSpring } from "@react-spring/web"

const testimonials = [
  {
    id: 1,
    content: "I earned an extra $10K in my first 2 months through launching digital products!",
    author: "John D.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Digital Products",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
  },
  {
    id: 2,
    content: "My content strategy led to 500K+ views and 6-figure sales in just one week!",
    author: "Michael S.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Content Strategy",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 3,
    content: "Scaled from $0 to $25K monthly recurring revenue in just 90 days using this framework.",
    author: "David L.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Revenue Scaling",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 4,
    content: "Launched my first digital product and made $15K in pre-sales alone!",
    author: "Tom R.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Product Launch",
    icon: <Star className="w-6 h-6 text-purple-500" />,
  },
]

export default function Reviews() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: false,
      rootMargin: '-20% 0px',
    }
  )

  return (
    <div className="bg-gradient-to-b from-[#e6f2ff] to-[#f0f8ff] py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <animated.div ref={ref} style={springs}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Here is What Our Clients<br />Are Achieving:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real entrepreneurs who took action and transformed their businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={index * 200}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-[#003366] mb-6">
              Imagine whats possible for you with access to these proven, life-changing strategies!
            </p>
            <CallToActionButton />
          </div>
        </animated.div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, delay }:{testimonial:{
    id:number,
    badge:string,
    content:string,
    author:string,
    avatar:string,
    icon:React.ReactNode
},delay:number}) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        scale: 0.9,
        rotateX: 45,
      },
      to: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
      },
      delay,
      config: {
        tension: 300,
        friction: 20,
      },
    }),
    {
      once: false,
      rootMargin: '-20% 0px',
    }
  )

  return (
    <animated.div ref={ref} style={springs}>
      <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] transform rotate-45 translate-x-8 -translate-y-8"></div>
        <div className="absolute top-2 right-2 text-white z-10">
          {testimonial.icon}
        </div>
        <Badge variant="secondary" className="mb-4">
          {testimonial.badge}
        </Badge>
        <p className="text-gray-700 text-lg mb-4">{testimonial.content}</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[#003366]">{testimonial.author}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </animated.div>
  )
}

function CallToActionButton() {
  const [hovered, setHovered] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }))

  return (
    <animated.button
      className="bg-[#003366] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#004080] transition-colors duration-300"
      style={hovered}
      onMouseEnter={() => setHovered({ scale: 1.05 })}
      onMouseLeave={() => setHovered({ scale: 1 })}
    >
      Join Our Success Stories
    </animated.button>
  )
}