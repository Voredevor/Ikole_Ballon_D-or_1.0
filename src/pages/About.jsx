import { theme } from '../styles/theme.js'

export default function About() {
  return (
    <section className={`${theme.section.base} ${theme.section.spacing}`}>
      <span className={theme.text.smallCaps}>About</span>

      <h2 className={`${theme.heading.primary} mt-4 mb-8`}>
        Ikole Ballon d’Or
      </h2>

      <div className="space-y-6 max-w-3xl">
        <p className={theme.text.muted}>
          The Ikole Ballon d’Or was created to redefine how football excellence is
          celebrated in Ikole City.
        </p>

        <p className={theme.text.muted}>
          Inspired by the global Ballon d’Or ceremony, it recognizes impact,
          culture, and legacy — from street footballers to campus stars.
        </p>

        <p className={theme.text.muted}>
          Ikole is home to <span className="text-gold font-medium">over 35 football clubs</span>,
          making it a vibrant grassroots football city.
        </p>
      </div>
    </section>
  )
}
