import { type FC, type FormEvent } from 'react'

export type ContactFormProperties = {
  onSubmitComplete: (response: Response) => void,
  onSubmitException: (e: Error) => void,
}

export const ContactForm: FC<ContactFormProperties> = ({
  onSubmitComplete,
  onSubmitException
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    fetch('https://usebasin.com/f/d793ad62daaa', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        onSubmitComplete(response)
      })
      .catch((e: Error) => onSubmitException(e))
  }

  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-4 py-6 md:p-6 bg-white rounded-lg shadow-lg w-full max-w-md md:mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          className="border border-gray-300 p-3 rounded text-base"
        />
        <input
          type="text"
          name="company"
          placeholder="company"
          required
          className="border border-gray-300 p-3 rounded text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="border border-gray-300 p-3 rounded text-base"
        />
        <input
          type="tel"
          name="phone"
          placeholder="optional phone"
          className="border border-gray-300 p-3 rounded text-base"
        />
        <textarea
          name="message"
          placeholder="your message"
          required
          className="border border-gray-300 p-3 rounded text-base h-32 resize-none"
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 px-4 rounded hover:bg-primary-dark transition text-base font-medium"
        >
          Send
        </button>
      </form>
    </>
  )
}