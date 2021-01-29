export interface ContactEmailDetails {
  name: string
  email: string
}

export interface ContactFormProps {
  onEmailSent: (details: ContactEmailDetails) => void
}