import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useHoverScale } from '../hooks/useHoverScale'
import toast from 'react-hot-toast'

export default function TopNavBar() {
  const hover = useHoverScale()
  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 z-20 flex h-14 w-full items-center justify-between border-b border-black/5 bg-white/85 px-4 backdrop-blur-md sm:px-8"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#37aee2] to-[#1e96c8] shadow-sm transition-transform duration-200 hover:scale-105">
          <Send size={18} strokeWidth={2} className="-ml-0.5 text-white" fill="white" />
        </div>
        <span className="text-[18px] font-semibold tracking-[-0.03em] text-[#222222] sm:text-[19px]">Telegram</span>
      </div>
      <motion.div {...hover.bind}>
        <Button
          onClick={() => toast.success('Opening Telegram download…')}
          className="h-9 rounded-full bg-[#2f8fd4] px-5 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-[#2680c1] sm:px-6 sm:text-[13px]"
        >
          Download
        </Button>
      </motion.div>
    </motion.header>
  )
}
