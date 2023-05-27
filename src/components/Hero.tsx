import { ReactNode } from 'react'

type HeroProps = {
    children: ReactNode
    hero: string
}

export default function Hero({children, hero}: HeroProps) {
  return (
    <header className={hero}>{children}</header>
  )
}

Hero.defaultProps ={
    hero: 'defaultHero'
};
