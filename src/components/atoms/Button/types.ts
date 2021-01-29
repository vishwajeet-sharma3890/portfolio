export type ButtonStyle = "default" | "contact" | "carousel"

export interface ButtonRipplePosition {
  top: string
  left: string
}

export interface ButtonProps {
  onClick?: () => void
  buttonStyle?: ButtonStyle
}