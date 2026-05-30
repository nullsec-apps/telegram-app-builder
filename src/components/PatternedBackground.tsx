import { doodlePattern } from '../lib/doodlePattern'

export default function PatternedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7fb86f] via-[#8bbf7f] to-[#a8cf7e]" />
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `url("${doodlePattern}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '420px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
    </div>
  )
}
