export function sanitizeText(value) {
  return value.replace(/[<>]/g, '').trim()
}

export function isEmpty(value) {
  return !value || value.trim().length === 0
}

export function isValidName(value) {
  return /^[a-zA-Z\s'.-]{2,50}$/.test(value)
}
