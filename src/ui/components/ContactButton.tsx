import { type FC, useState } from "react"
import { Mail, X } from "lucide-react"
import { ContactForm } from "./ContactForm"

export type ContactButtonProperties = {
  innerWidth: number | null
}

export const ContactButton: FC<ContactButtonProperties> = ({ innerWidth }) => {
  const [showForm, setShowForm] = useState(false)
  const [contactError, setContactError] = useState(false)

  const onContactClick = () => setShowForm(true)
  const closeModal = () => setShowForm(false)
  const onContactSubmitComplete = (response: Response) => {
    if (response.ok) {
      setShowForm(false)
    } else {
      console.log('Error Response: ', JSON.stringify(response))
      setContactError(true)
      setShowForm(false)
      alert('Apologies, looks like there was an issue submitting the form. Please email at kev.cole@yahoo.com.')
    }
  }
  const onContactSubmitException = (e: Error) => {
    console.log('Error Response: ', JSON.stringify(e))
    setContactError(true)
    setShowForm(false)
    alert('Apologies, looks like there was an issue submitting the form. Please email at kev.cole@yahoo.com.')
  }

  if (contactError) return null

  if (!showForm) {
    return (
      <a
        className="cursor-pointer fixed bottom-8 right-8 bg-primary text-secondary p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        target="_blank"
        aria-label="Contact Me"
        onClick={onContactClick}
      >
        <Mail className="w-6 h-6" />
      </a>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
      onClick={closeModal}
    >
      {/* Modal (clicks inside won't close it) */}
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>
        <ContactForm
          onSubmitComplete={onContactSubmitComplete}
          onSubmitException={onContactSubmitException}
        />
      </div>
    </div>
  )
}
