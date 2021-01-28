export type InputType = "input" | "textarea"

export interface InputProps {
  placeholder: string
  onChange:() => void
  inputType?: InputType
}