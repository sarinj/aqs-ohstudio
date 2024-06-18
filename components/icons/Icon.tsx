import React, { FC, SVGProps, CSSProperties } from 'react'

export interface IconProps {
  height?: string
  width?: string
  className?: string
  viewBox?: string
  ref?: string
  style?: CSSProperties
  fill?: string
}

export function Icon(
  SvgComponent: FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> {
  return function IconComponent({
    height = '24',
    width = '24',
    className = '',
    ...props
  }: IconProps) {
    const svgProps = {
      height,
      width,
      className,
      ...props,
    }
    return <SvgComponent {...svgProps} />
  }
}
