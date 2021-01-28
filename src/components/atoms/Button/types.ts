export type ButtonStyle = "default" | "contact"

export interface ButtonProps {
  onClick: () => void
  buttonStyle?: ButtonStyle
}