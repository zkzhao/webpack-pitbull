import React from 'react'

interface IProps {
  component: any
}

const Icon: React.FC<IProps> = props => {
  const { component } = props
  return <>{component.render()}</>
}

export default Icon
