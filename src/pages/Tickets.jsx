export default function Tickets() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 space-y-10 fade-in">
      <h2 className="text-3xl md:text-4xl text-gold font-semibold text-center">
        Tickets & Tables
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {['Regular Access', 'VIP Access', 'VIP Tables'].map((item) => (
          <div
            key={item}
            className="card card-hover p-6 text-center"
          >
            <h3 className="text-lg font-medium text-gold mb-2">
              {item}
            </h3>
            <p className="text-white/70 text-sm">
              Details will be announced soon.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
