"use client"
import { useState, useEffect } from 'react'
import {  AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import * as motion from "framer-motion/m"
import { createNewsLetterAction } from '@/actions/newsletter-actions'
import toast from 'react-hot-toast'

export default function NewsletterSubscription() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isLoading,setIsLoading]= useState(false)
  const[hasSubscribed,setHasSubscribed]= useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show the component when user has scrolled 25% of the page
      if (scrollPosition > windowHeight * 0.25 && !hasScrolled) {
        setHasScrolled(true)
        setIsVisible(true)
      }

      // Hide the component when user scrolls back to top
      if (scrollPosition < windowHeight * 0.1) {
        setIsVisible(false)
      } else if (hasScrolled) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const handleSubmit = async(e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault()
    console.log('Submitted email:', email)

    const response = await createNewsLetterAction({email})
    if(response?.data?.success){
        toast("subscribed")
        setHasSubscribed(true)
    }else{
        toast("failed to subscribe ")
    }

    setIsVisible(false)
    setHasScrolled(false) // Reset so it can appear again on next scroll
    setIsLoading(false)
  }

  return (
    <AnimatePresence>
      {isVisible&&!hasSubscribed && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-[#f3e4d7] to-[#e8c9b0] p-6 rounded-3xl shadow-lg max-w-sm border border-[#d4b094]"
          >
            <Button 
            disabled={isLoading}
              variant="ghost" 
              size="icon"
              className={ `${isLoading&&"opacity-80"}absolute top-2 right-2 text-[#8b5e3c] hover:text-[#6d4b30]` }
              onClick={() => {
                setIsVisible(false)
                setHasSubscribed(true)
                setHasScrolled(false) // Reset so it can appear again on next scroll
              }}
            >
              <X className="h-4 w-4" />
            </Button>
            <h2 className="text-2xl font-bold mb-4 text-[#8b5e3c]">Join Our Community</h2>
            <p className="mb-4 text-[#6d4b30]">Subscribe for exclusive updates, tips, and special offers.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/50 border-[#d4b094] focus:border-[#8b5e3c] rounded-full text-[#6d4b30]"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#8b5e3c] to-[#6d4b30] text-[#f3e4d7] hover:from-[#7a5235] hover:to-[#5c3f28] rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Subscribe Now
              </Button>
            </form>
          </motion.div>
          <motion.div
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(236, 72, 153, 0)",
                "0px 0px 20px rgba(139, 94, 60, 0.3)",
                "0px 0px 0px rgba(236, 72, 153, 0)"
              ]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute inset-0 rounded-3xl z-[-1]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}