export const Hero = () => (
  <div className='float-none flex flex-col md:flex-row lg:float-left'>
    <img src='/kevin-cole.jpg' alt='Kevin Cole' className='h-40 w-40 rounded-lg m-4 md:m-8' />
    <div className='px-4 bg-transparent m-4 md:m-8 md:mt-16'>
      <div className='text-h2-md md:text-h2 font-bold text-white'>Kevin Cole</div>
      <a href='mailto:kev.cole@yahoo.com' className='text-white hover:underline block'>kev.cole@yahoo.com</a>
      <a href='tel:+15126959682' className='text-white hover:underline block'>+1 (512) 695-9682</a>
      <div className='flex gap-4 mt-2'>
        <a href='https://github.com/kevin-cole' target='_blank' rel='noopener noreferrer' className='text-white hover:underline text-sm'>GitHub</a>
        <a href='https://www.linkedin.com/in/kevinleecole' target='_blank' rel='noopener noreferrer' className='text-white hover:underline text-sm'>LinkedIn</a>
      </div>
    </div>
  </div>
)