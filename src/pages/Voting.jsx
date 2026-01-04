import { theme } from '../styles/theme.js'

export default function Voting() {
  return (
    <section className={`${theme.section.base} ${theme.section.spacing}`}>
      <span className={theme.text.smallCaps}>Voting</span>

      <h2 className={`${theme.heading.primary} mt-4 mb-6`}>
        Public Voting
      </h2>

      <div className={`${theme.card.base} max-w-xl p-8`}>
        <p className={theme.text.muted}>
          Voting platform will be available soon. All votes will be transparent
          and verified through payment confirmation.
        </p>

        <div className="mt-4 text-gold font-medium">
          Available Soon
        </div>
      </div>
    </section>
  )
}
