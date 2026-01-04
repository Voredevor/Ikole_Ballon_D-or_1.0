export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
