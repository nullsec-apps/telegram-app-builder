import { motion } from 'framer-motion'

export default function BotAvatar() {
  const logoUrl = (window as any).__NULLSEC__?.logoUrl as string | undefined
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full bg-gradient-to-br from-[#9b6cf0] via-[#6e7bf2] to-[#4fc3f7] shadow-[0_8px_28px_-6px_rgba(110,123,242,0.55)] sm:h-[120px] sm:w-[120px]"
    >
      <div className="absolute inset-0 rounded-full ring-4 ring-white" />
      {logoUrl ? (
        <img
          src={logoUrl}
          alt="Nullsec"
          className="relative h-12 w-12"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      ) : (
        <span className="relative font-mono text-[40px] font-bold leading-none text-white">
          /\
        </span>
      )}
    </motion.div>
  )
}
