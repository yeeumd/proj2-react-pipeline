import { ReactNode } from 'react'

type BannerProps = {
    children: ReactNode
    title: string
    subtitle: String
}
export default function Banner({children, title, subtitle}: BannerProps) {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
    </div>
  )
}
