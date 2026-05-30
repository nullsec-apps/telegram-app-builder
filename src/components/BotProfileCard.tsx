import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import BotAvatar from './BotAvatar'
import StartBotButton from './StartBotButton'
import { BadgeCheck } from 'lucide-react'

const bot = {
  name: 'Nullsec Bot',
  handle: '@nullsecstudio_bot',
  description:
    "Explain your app idea, i'll build it. The official Nullsec Bot. Powered by $NSEC",
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function BotProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="w-[360px] max-w-[90vw] rounded-2xl border-0 bg-white px-6 py-9 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.28)] sm:px-7">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <BotAvatar />
          </motion.div>
          <motion.div variants={item} className="mt-5 flex items-center gap-1.5">
            <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-[#222222] sm:text-[23px]">
              {bot.name}
            </h1>
            <BadgeCheck size={18} className="text-[#2f8fd4]" fill="#2f8fd4" stroke="white" />
          </motion.div>
          <motion.p variants={item} className="mt-0.5 text-[14px] font-medium text-[#2f8fd4]">
            {bot.handle}
          </motion.p>
          <motion.p variants={item} className="mt-4 text-[14px] leading-relaxed text-[#555555]">
            {bot.description}
          </motion.p>
          <motion.div variants={item} className="mt-7 w-full">
            <StartBotButton />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  )
}
