interface loginProps {
  setIsLoading: () => void
}

export const Login = ({ setIsLoading }: loginProps) => {
  return (
    <>
      <div className='hidden lg:flex h-screen w-screen justify-center items-center '>
        <div className='absolute top-12 left-12'>
          <h1 className='flex text-8xl font-semibold items-center gap-2'>
            <svg
              className='icon icon-tabler icon-tabler-rocket md:w-[140px] md:h-[140px]'
              width='60'
              height='60'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#ffffff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3' />
              <path d='M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3' />
              <path d='M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
            </svg>
            ROCKET
          </h1>
        </div>
        <button
          className='bg-white text-[#111215] font-bold px-4 py-2 text-3xl rounded hover:bg-[#111215] hover:text-white hover:border-4 hover:border-white hover:rounded-lg transition'
          onClick={() => setIsLoading()}
        >
          PRUEBA LA APLICACIÓN
        </button>
      </div>
    </>
  )
}
