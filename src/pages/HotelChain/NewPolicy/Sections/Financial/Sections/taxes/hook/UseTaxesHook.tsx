'use client';

import { useState } from 'react';
import { TaxesInterface } from '../interface/type';

export default function UseTaxesHook() {
  const taxesData: Array<TaxesInterface> = [
    {
      id: 1,
      title: 'ISS',
      paymentType: null,
      value: 0,
      checked: false,
    },
    {
      id: 2,
      title: 'Taxa de Turismo',
      paymentType: null,
      value: 0,
      checked: false,
    },
    {
      id: 3,
      title: 'Taxa de Serviço',
      paymentType: null,
      value: 0,
      checked: false,
    },
    {
      id: 4,
      title: 'Outros',
      paymentType: null,
      value: 0,
      checked: false,
    },
    {
      id: 5,
      title: 'Reserva',
      paymentType: null,
      value: 0,
      checked: false,
    },
  ];

  const getChecked = () => {
    return taxesData.map((e) => {
      return e.checked;
    });
  };

  const [edit, setEdit] = useState(false);
  const [enabled, setEnabled] = useState(getChecked);

  return {
    edit,
    setEdit,
    enabled,
    setEnabled,
    taxesData,
  };
}
