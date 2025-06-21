import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-[70vh] bg-ground flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold">
              Refund Policy
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Our commitment to quality and transparency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-stone mx-auto">
              <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
                Money-Back Guarantee
                Our promise if you take action

                At HersFaceless.com, we stand by the value of our program. That’s why we offer a money-back guarantee — but only if you take action.

                If you go through the lessons, implement what you learn, and apply the steps inside the program — and still don’t see results — we’ll personally review your funnel and process. If it’s clear that you followed the system and it didn’t work for you, we’ll offer a full refund.

                This way, you have nothing to lose, and everything to gain.

                If you have questions before joining, email us at ✉️ hmfaceless@hersfaceless.com — we’re happy to help.
              </p>
              <div className="flex items-center justify-center gap-2 mt-8 text-center">
                <p className="text-lg">
                  If you have any questions prior to
                  purchasing, feel free to reach out to us at{" "}
                  <Link
                    href="mailto:hmfaceless@hersfaceless.com"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="h-4 w-4" />
                    hmfaceless@hersfaceless.com
                  </Link>
                  . We&apos;re here to help!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
