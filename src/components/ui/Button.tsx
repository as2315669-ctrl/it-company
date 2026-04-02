import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  }

export function Button({
  children,
  variant = 'primary',
  href,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className ?? ''}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
