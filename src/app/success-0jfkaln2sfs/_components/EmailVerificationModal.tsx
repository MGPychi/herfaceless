'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { verifyEmailIfIsPaid } from '@/data/newsletter-data'

export function EmailVerificationModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const hasPaid = await verifyEmailIfIsPaid(email)
      if (hasPaid) {
        window.location.href = `/success-0jfkaln2sfs?email=${encodeURIComponent(email)}`
      } else {
        setError("No payment found for this email. Please make a purchase first.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Verify Your Purchase</DialogTitle>
          <DialogDescription>
            Please enter your email to verify your purchase and access your content.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button variant={"secondary"}  type="submit" className="w-full text-white " disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify Purchase'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  )
}

