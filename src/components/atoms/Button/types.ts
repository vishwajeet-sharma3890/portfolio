export type ButtonStyle = "default" | "contact"

export interface ButtonRipplePosition {
  top: string
  left: string
}

export interface ButtonProps {
  onClick: () => void
  buttonStyle?: ButtonStyle
}