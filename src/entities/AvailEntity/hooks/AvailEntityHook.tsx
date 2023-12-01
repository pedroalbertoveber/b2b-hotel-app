import React from 'react'

export default function AvailEntityHook() {
  const [data, setData] = React.useState(null)

  return { data, setData }
}
