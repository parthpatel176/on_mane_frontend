import React from "react";
import { useState } from "react";
import './TextInput.css';

interface TextInputProps {
  defaultText: string
  animateTrigger: boolean
}

const TextInput: React.FC<TextInputProps> = ({defaultText, animateTrigger}) => {
  const [text, setText] = useState(defaultText)

  // make a function to use defaultText to determine styling of text color
  const styling = {
    color: text == defaultText ? '#d9d8d670' : undefined,
    opacity: animateTrigger ? 100 : 0
  }
  
  return (
    <input className="TextInputWrapper"
    type="text"
    value={text}
    onFocus={() => text == defaultText ? setText('') : undefined}
    onBlur={() => text == '' ? setText(defaultText) : undefined}
    onChange={event => setText(event.target.value)}
    style={styling}
    />
  )
}
export default TextInput