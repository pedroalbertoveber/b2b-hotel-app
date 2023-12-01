import React from 'react'

export default function UsersHomeEntityHook() {
  const [data, setData] = React.useState(null)
  const [hotels, setHotels] = React.useState(null)
  const [hotelsChain, setHotelsChain] = React.useState(null)

  return { data, setData, hotels, setHotels, hotelsChain, setHotelsChain }
}
