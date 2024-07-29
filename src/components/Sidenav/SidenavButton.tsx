import { SidenavButtonProps } from '../../common/types'

export const SidenavButton = ({ link, children }: SidenavButtonProps) => {
  return (
    <a
      href={link}
      className='lg:mt-[1.5rem]
            w-12 h-12 flex justify-center items-center
            rounded-full hover:bg-[rgba(255,255,255,0.1)] cursor-pointer'
    >
      {children}
    </a>
  )
}
