import { awards } from '../data/awards.data'
import { theme } from '../styles/theme'
import awardPlaceholder from '../assests/placeholder/31343C.svg'
import Container from '../components/Container.jsx'

export default function Awards() {
  return (
    <Container>
        <section className={`${theme.section.base} ${theme.section.spacing}`}>
        <span className={theme.text.smallCaps}>Awards</span>

        <h2 className={`${theme.heading.primary} mt-4 mb-12`}>
            Award Categories
        </h2>

        {Object.values(awards).map((tier) => (
            <div key={tier.title} className="mb-16">
            <h3 className="text-xl font-medium mb-2">{tier.title}</h3>
            <p className={`${theme.text.muted} mb-6`}>
                {tier.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {tier.items.map((award) => (
                <div
                    key={award}
                    className={`${theme.card.base} ${theme.card.hover} p-4 text-center`}
                >
                    <img
                    src={awardPlaceholder}
                    alt={award}
                    className="w-full h-36 object-contain rounded-md mb-4"
                    />
                    <p className="text-sm text-dark font-medium">{award}</p>
                </div>
                ))}
            </div>
            </div>
        ))}
        </section>
    </Container>
  )
}
