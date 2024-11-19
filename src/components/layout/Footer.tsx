import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-gray-100  bg-ground">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and exclusive offers directly to your inbox.
            </p>
            <div className="flex gap-2 max-w-sm">
              <Input placeholder="Enter your email" type="email" className="max-w-lg flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="grid gap-2">
                <Link href="/#pricing" className="text-sm hover:underline">
                  Pricing
                </Link>
                <Link href="/refund-policy" className="text-sm hover:underline">
                  Refund Policy
                </Link>
                <Link href="mailto:contact@hersfaceless.com" className="text-sm hover:underline">
                  contact@example.com
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <nav className="grid gap-2">
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Follow us on Instagram
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}