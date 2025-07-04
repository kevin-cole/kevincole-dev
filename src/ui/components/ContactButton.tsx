import { type FC, useState } from "react"
import { Mail, X } from "lucide-react"
import { ContactForm } from "./ContactForm"

export const ContactButton: FC = () => {
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
        className={`
          fixed z-40 cursor-pointer bg-secondary text-primary p-4 rounded-full shadow-lg
          hover:scale-110 transition-transform
          right-2 bottom-20 md:right-8 md:top-20 md:bottom-auto
        `}
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
      className="fixed inset-0 bg-black/50 z-40 overflow-y-auto"
      onClick={closeModal}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Icon */}
          <button
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
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
    </div>
  )
}