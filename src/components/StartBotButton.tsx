import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useHoverScale } from '../hooks/useHoverScale'
import toast from 'react-hot-toast'

export default function StartBotButton() {
  const hover = useHoverScale()
  return (
    <motion.div {...hover.bind} className="w-full">
      <Button
        onClick={() => toast.success('Starting Nullsec Bot…')}
        className="h-12 w-full rounded-full bg-[#2f8fd4] text-[14px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_6px_18px_-4px_rgba(47,143,212,0.6)] transition-colors duration-200 hover:bg-[#2680c1]"
      >
        Start Bot
      </Button>
    </motion.div>
  )
}
