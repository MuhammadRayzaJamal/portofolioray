export const ease = [0.25, 0.1, 0.25, 1]

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Build a pre-filled email to the site owner from the contact form (no server needed).
export function composeMail(to, form, mobile) {
  const f = Object.fromEntries(new FormData(form))
  const subject = (f.subject || 'New message from portfolio').toString()
  const body = `${f.message || ''}\n\n— ${f.name || ''} (${f.email || ''})`
  const q = (s) => encodeURIComponent(s)
  if (mobile) return `mailto:${to}?subject=${q(subject)}&body=${q(body)}`
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${q(to)}&su=${q(subject)}&body=${q(body)}`
}
