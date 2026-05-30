export function useHoverScale() {
  return {
    bind: {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
    },
  }
}
