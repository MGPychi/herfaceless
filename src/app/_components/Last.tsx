import * as motion from "framer-motion/m"
import { Button } from "@/components/ui/button"

const SVGIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300"
    height="200"
    viewBox="0 0 300 200"
    fill="none"
    className="mx-auto mb-8"
  >
    <motion.rect
      x="50"
      y="50"
      width="200"
      height="120"
      rx="10"
      fill="#D2B48C"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.circle
      cx="150"
      cy="90"
      r="30"
      fill="#8B4513"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    />
    <motion.path
      d="M120 130 L180 130 L150 160 Z"
      fill="#8B4513"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    />
    <motion.rect
      x="70"
      y="30"
      width="40"
      height="40"
      rx="5"
      fill="#4CAF50"
      initial={{ opacity: 0, rotate: -45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    />
    <motion.rect
      x="190"
      y="30"
      width="40"
      height="40"
      rx="5"
      fill="#2196F3"
      initial={{ opacity: 0, rotate: 45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    />
  </svg>
)

export default function Last() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-16">LAST BUT NOT LEAST</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <SVGIllustration />
      </motion.div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg"
        >
          How many opportunities for{" "}
          <span className="font-semibold bg-primary/10 px-1 rounded">financial freedom</span> and{" "}
          <span className="font-semibold bg-primary/10 px-1 rounded">personal fulfillment</span> are you missing out on
          each day by not starting your digital product journey now?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg"
        >
          If you&apos;ve read this far,
          <br />
          you know <span className="font-semibold">our membership can help achieve your dreams.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg"
        >
          Are you ready to take control of your financial future and enjoy life with your loved ones with less
          worry and more joy?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg"
        >
          Inside our membership you&apos;ll learn how to create{" "}
          <span className="font-semibold">successful digital products</span> that not only boost your income but
          also enrich your life and those you love and care about.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg"
        >
          Don&apos;t let this chance slip away because you deserve to start creating the life you&apos;ve always
          wanted!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pt-8"
        >
          <Button
          aria-label="count me in button"
            size="lg"
            className="bg-[#D2B48C] hover:bg-[#C4A484] text-black font-semibold text-lg px-8 py-6"
          >
            COUNT ME IN!
          </Button>
        </motion.div>
      </div>
    </section>
  )
}