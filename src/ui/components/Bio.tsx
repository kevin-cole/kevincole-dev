export const DesktopBio = () => (
  <div className='hidden lg:block my-16 mx-12 text-4xl leading-normal text-turquoise-light'>
    <div className='text-turquoise-light'>20 years creating and maintaining software.</div>
    <div className='text-turquoise-light'>Primarily for early stage start-ups.</div>
    <div className='text-turquoise-light'> I have programmed in many</div>
    <div className='text-turquoise'>languages and architectures, which gives me a firm basis</div>
    <div className='text-turquoise'>in software development frameworks and strategies on both</div>
    <div className='text-turquoise'> the front and backend. My experience ranges from</div>
    <div className='text-turquoise'>CI/CD to CSS. I can learn new technologies quickly.</div>
    <div className='text-turquoise'>I enjoy collaborating with others</div>
    <div style={{ color: '#16a998' }}>and mentoring new developers.</div>
    <div className='text-turquoise-dark'>I am always looking forward</div>
    <div className='text-gray-700'>to a new adventure.</div>
  </div>
)

export const MobileBio = () => (
  <div className='block md:hidden my-4 mx-12 text-3xl leading-none text-turquoise-light'>
    <div className='text-white'>
      20 years creating and maintaining software and always looking for a new
    </div>
    <div className='text-turquoise-light'>adventure.</div>
  </div>
)

export const TabletBio = () => (
  <div className='hidden md:block lg:hidden my-16 mx-12 text-3xl leading-tight text-turquoise-light max-w-[66vw]'>
    <div className='text-turquoise-light'>
      20 years creating and maintaining software.
      Primarily for early stage start-ups.
      I have programmed in many languages and architectures,
      which gives me a firm basis in software development frameworks and strategies on both the front and backend.
      My experience ranges from CI/CD to CSS. I can learn new technologies quickly
      I enjoy collaborating with others and mentoring new developers.
    </div>
    <div className='text-primary'>I am always looking forward to a new adventure.</div>
  </div>
)
