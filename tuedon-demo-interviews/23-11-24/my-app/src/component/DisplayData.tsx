import { DisplayType } from '@/utils/types'
import React, { FC } from 'react'


const DisplayData:FC<DisplayType> = ({id, name, description}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

export default DisplayData