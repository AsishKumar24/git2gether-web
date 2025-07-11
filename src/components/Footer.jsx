import React from 'react'

const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal bg-base-300 text-neutral-content p-4 fixed bottom-0 w-full z-10'>
      <aside className='grid-flow-col items-center'>
        <svg
          width='36'
          height='36'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='fill-current'
        >
          <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        {/* Instagram */}
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-current'
          >
            <path d='M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.404a4.89 4.89 0 0 1 1.77 1.155 4.89 4.89 0 0 1 1.155 1.77c.164.46.348 1.26.404 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.404 2.43a4.89 4.89 0 0 1-1.155 1.77 4.89 4.89 0 0 1-1.77 1.155c-.46.164-1.26.348-2.43.404-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.404a4.89 4.89 0 0 1-1.77-1.155 4.89 4.89 0 0 1-1.155-1.77c-.164-.46-.348-1.26-.404-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.404-2.43a4.89 4.89 0 0 1 1.155-1.77 4.89 4.89 0 0 1 1.77-1.155c.46-.164 1.26-.348 2.43-.404C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.136 0-3.504.012-4.736.068-1.04.05-1.605.218-1.98.362a3.1 3.1 0 0 0-1.124.732 3.1 3.1 0 0 0-.732 1.124c-.144.375-.312.94-.362 1.98-.056 1.232-.068 1.6-.068 4.736s.012 3.504.068 4.736c.05 1.04.218 1.605.362 1.98.17.43.396.791.732 1.124.333.336.694.562 1.124.732.375.144.94.312 1.98.362 1.232.056 1.6.068 4.736.068s3.504-.012 4.736-.068c1.04-.05 1.605-.218 1.98-.362a3.1 3.1 0 0 0 1.124-.732 3.1 3.1 0 0 0 .732-1.124c.144-.375.312-.94.362-1.98.056-1.232.068-1.6.068-4.736s-.012-3.504-.068-4.736c-.05-1.04-.218-1.605-.362-1.98a3.1 3.1 0 0 0-.732-1.124 3.1 3.1 0 0 0-1.124-.732c-.375-.144-.94-.312-1.98-.362-1.232-.056-1.6-.068-4.736-.068zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.164a4.002 4.002 0 1 1 0-8.004 4.002 4.002 0 0 1 0 8.004zm5.25-10.833a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-current'
          >
            <path d='M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.086 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.996.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.47-2.38 1.236-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
      </nav>
    </footer>
  )
}

export default Footer
