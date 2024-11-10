'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useSpring, animated, config } from "@react-spring/web"
import { useEffect, useState } from "react"

export default function Hero() {
  const [,setRun] = useState(false)
  useEffect(()=>{
    setRun(true)
  },[])
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  })

  const scaleIn = useSpring({
    from: { transform: 'scale(0.9)' },
    to: { transform: 'scale(1)' },
    config: config.wobbly,
  })

  const leafAnimation = useSpring({
    from: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
    to: { opacity: 0.2, transform: 'rotate(0deg) scale(1)' },
    config: { duration: 1000 },
  })

  const [playButtonProps ] = useSpring(() => ({
    scale: 1,
    config: config.wobbly,
  }))

  return (
    <div className="min-h-screen  bg-primary relative overflow-hidden">
      {/* Decorative Shapes */}
      <animated.div style={leafAnimation} className="absolute left-0 top-0 w-[400px] h-[400px]">
        <GeometricPattern />
      </animated.div>
      <animated.div style={leafAnimation} className="absolute right-0 bottom-0 w-[400px] h-[400px] rotate-180">
        <GeometricPattern />
      </animated.div>
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <animated.div style={fadeIn} className="bg-[#003366] text-white text-sm px-6 py-2 rounded-full uppercase tracking-wider">
            Mens Inner Circle Membership
          </animated.div>

          {/* Headings */}
          <animated.div style={fadeIn} className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build, launch, and scale{" "}
              <span className="text-[#003366]">your own</span>
              <br />
              digital empire in just{" "}
              <span className="text-[#0066cc]">30 days</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              Transform your expertise into a thriving online business. Get consistent sales notifications, secure financial freedom, and create the lifestyle you have always dreamed of.
            </p>
          </animated.div>

          {/* Video Card */}
          <animated.div style={scaleIn} className="w-full">
            <Card className="max-w-4xl mx-auto aspect-video bg-[#f0f8ff] relative shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48">
                  <IllustrationFigure />
                </div>
                <animated.div
                  style={playButtonProps}
                  // onMouseEnter={() => setPlayButton({ scale: 1.1 })}
                  // onMouseLeave={() => setPlayButton({ scale: 1 })}
                >
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#003366]/80 hover:bg-[#003366]"
                  >
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                </animated.div>
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
                COPYRIGHT 2024 © MEN IN SUCCESS. ALL RIGHTS RESERVED | DESIGNED BY @MAVWITHEART
              </div>
            </Card>
          </animated.div>

          {/* CTA Button */}
          <animated.div style={fadeIn}>
            <Button className="bg-[#003366] text-white hover:bg-[#004080] text-lg px-8 py-2 h-auto">
              JOIN NOW!
            </Button>
          </animated.div>
        </div>
      </main>
    </div>
  )
}

function GeometricPattern() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#cce0ff]">
      <rect x="0" y="0" width="33" height="33" />
      <rect x="33" y="33" width="33" height="33" />
      <rect x="66" y="66" width="33" height="33" />
    </svg>
  )
}

function IllustrationFigure() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50,20 C60,20 70,30 70,50 C70,70 60,80 50,80 C40,80 30,70 30,50 C30,30 40,20 50,20"
        className="fill-[#003366]"
      />
      <path
        d="M45,40 C55,40 65,45 65,60 C65,75 55,80 45,80 C35,80 25,75 25,60 C25,45 35,40 45,40"
        className="fill-[#0066cc]"
      />
      <rect x="40" y="30" width="20" height="10" className="fill-[#e6f2ff]" />
    </svg>
  )
}