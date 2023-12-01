import React from 'react'

export default function HotelChainEntityHook() {
  const [data, setData] = React.useState(null)

  return { data, setData }
}
