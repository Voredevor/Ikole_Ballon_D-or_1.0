import adPlaceholder from '../assets/ads/adPH.jpg'

export default function SidebarAds() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-black border-r border-gold/30 p-4 flex flex-col gap-6 overflow-y-auto z-0">
      <h3 className="text-gold text-xs uppercase tracking-widest text-center">
        Sponsored
      </h3>

      {[1, 2, 3].map((ad) => (
        <div
          key={ad}
          className="border border-gold/20 rounded-md p-3 hover:border-gold transition"
        >
          <img
            src={adPlaceholder}
            alt="Sponsor Ad"
            className="w-full h-24 object-contain"
          />
          <p className="text-xs text-white/60 mt-2 text-center">
            Sponsor Slot
          </p>
        </div>
      ))}
    </div>
  )
}