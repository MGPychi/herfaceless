import * as motion from "framer-motion/m";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from 'lucide-react';
import { getAllPricing } from "@/data/pricing-data";
// import PricingLink from "./PricingLink";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default async function Pricing() {
  const plans = await getAllPricing();

  return (
    <section id="pricing" className="min-h-screen bg-ground py-2 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Join Now And Get Full Lifetime Access
        </h1>
      </motion.div>

      <div className="container mx-auto px-4 py-8 md:py-12  flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
            >
              <Card className="">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    (One Time Payment)
                  </p>
                  <div className="text-4xl font-bold mt-4">
                    <span className="text-[#b17f65]">${plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {plan.pricingItems.map((planFeature) => (
                      <motion.li
                        key={planFeature.id}
                        variants={item}
                        className="flex items-start gap-2"
                      >
                        <Check className="h-5 w-5 text-[#b17f65] mt-1 flex-shrink-0" />
                        <span>{planFeature.body}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
                <CardFooter className="mt-auto">

                  <Link href={plan.stripeUrl}>
                    <Button
                      aria-label="sign me up button"
                      className="w-full  bg-[#dbc1b0] hover:bg-[#b17f65] text-black py-6 text-lg"
                    >
                      Get Started!
                    </Button>
                  </Link>
                  {/*
                  <PricingLink plan={plan} >
                    <Button
                      aria-label="sign me up button"
                      className="w-full  bg-[#dbc1b0] hover:bg-[#b17f65] text-black py-6 text-lg"
                    >
                      Get Started!
                    </Button>
                </PricingLink>
                    */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
