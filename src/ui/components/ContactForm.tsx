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
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="company"
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="border p-2 rounded"
        />
        <input
          type="phone"
          name="phone"
          placeholder="optional phone"
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder=""
          required
          className="border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
        >
          Send
        </button>
      </form>
    </>
  )
}