import Container from "../components/container"
import { theme } from "../styles/theme"

export default function Logistics() {
  return (
    <Container> 
        <section className={`${theme.section.base} ${theme.section.spacing}`}>
        <h2 className="text-2xl md:text-4xl text-gold mb-8">
            Event Information
        </h2>

        <div className={`${theme.card.base} ${theme.card.hover} max-w-md p-8`}>
            <p>
            <span className="text-gold font-semibold">Venue:</span> To be announced
            </p>
            <p>
            <span className="text-gold font-semibold">Date:</span> To be announced
            </p>
            <p>
            <span className="text-gold font-semibold">Dress Code:</span>{' '}
            Black | Gold | Elite Football Chic
            </p>
            <p>
            <span className="text-gold font-semibold">Security:</span>{' '}
            Controlled access
            </p>
            <p>
            <span className="text-gold font-semibold">Media:</span>{' '}
            Accredited coverage only
            </p>
        </div>
        </section>
    </Container>
  )
}
