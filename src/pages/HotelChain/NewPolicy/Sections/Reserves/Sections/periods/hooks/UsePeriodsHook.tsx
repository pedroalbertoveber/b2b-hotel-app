import { useState } from 'react'

export default function UsePeriodsHook({ policy }: { policy: any }) {
  const Data = [
    {
      title: 'Reservas até',
      childs: [
        {
          title: 'Horas antes do Check-in',
          value: 0,
          checked: false,
        },
        {
          title: 'Dias antes do Check-in',
          value: 0,
          checked: false,
        },
      ],
    },
    {
      title: 'Reservas no máximo até',
      childs: [
        {
          title: 'Horas antes do Check-in',
          value: 0,
          checked: false,
        },
        {
          title: 'Dias antes do Check-in',
          value: 0,
          checked: false,
        },
      ],
    },
  ]

  const [edit, setEdit] = useState(false)
  const [lastMinuteReservations, setLastMinuteReservations] = useState(false)
  const [lastMinuteReservationsData, setLastMinuteReservationsData] = useState(
    Data[0].childs.map((e) => {
      return {
        checked: e.checked,
        value: e.value,
      }
    }),
  )

  const handleLastMinuteReservationsData = () => {
    const aux = lastMinuteReservationsData.map(() => {
      return {
        checked: false,
        value: 0,
      }
    })
    setLastMinuteReservationsData(aux)
  }
  const [earlyReservations, setEarlyReservations] = useState(false)
  const [earlyReservationsData, setEarlyReservationsData] = useState(
    Data[1].childs.map((e) => {
      return {
        checked: e.checked,
        value: e.value,
      }
    }),
  )

  const handleEarlyReservationsData = () => {
    const aux = earlyReservationsData.map(() => {
      return {
        checked: false,
        value: 0,
      }
    })
    setEarlyReservationsData(aux)
  }

  return {
    Data,
    edit,
    setEdit,
    lastMinuteReservations,
    setLastMinuteReservations,
    lastMinuteReservationsData,
    setLastMinuteReservationsData,
    handleLastMinuteReservationsData,
    earlyReservations,
    setEarlyReservations,
    earlyReservationsData,
    setEarlyReservationsData,
    handleEarlyReservationsData,
  }
}
