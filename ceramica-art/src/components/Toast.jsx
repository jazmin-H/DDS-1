"use client"

import { useState, useEffect } from "react"

const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        onClose && onClose()
      }, 300) // Tiempo para la animación de salida
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={`fixed bottom-4 right-4 bg-[#c8553d] text-white py-2 px-4 rounded-md shadow-lg z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  )
}

export default Toast
