import React from 'react'

export default function HotelHook() {
  const [data, setData] = React.useState(null)

  return { data, setData }
}
