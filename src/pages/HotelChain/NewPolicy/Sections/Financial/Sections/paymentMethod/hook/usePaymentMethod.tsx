'use client';

import { DashContext } from '@/app/(dashboard)/(context)/DashContext';
import HotelClass from '@/classes/Hotel/HotelClass';
import HotelChainClass from '@/classes/HotelChain/HotelChainClass';
import { set } from '@/services/cache/cache';
import { useContext, useState } from 'react';

export default function UsePaymentMethodHook({ policy }: { policy: any }) {
  const SetPaymentData = (
    activePaymentMethods: any,
    cardOnlyPhysical: any,
    creditCards: any
  ) => {
    let paymentMethodData = {};
    activePaymentMethods.forEach((e: any) => {
      if (e.paymentMethod === 'CREDIT_CARD') {
        paymentMethodData = {
          ...paymentMethodData,
          creditCardPaymentMethod: {
            creditCardBrands: creditCards,
            onlyPhysical: cardOnlyPhysical,
            paymentMethod: 'CREDIT_CARD',
          },
        };
      }
      if (e.paymentMethod === 'DIRECT') {
        paymentMethodData = {
          ...paymentMethodData,
          directPaymentMethod: {
            paymentMethod: 'DIRECT',
          },
        };
      }

      if (e.paymentMethod === 'BILLED') {
        paymentMethodData = {
          ...paymentMethodData,
          billedPaymentMethod: {
            paymentMethod: 'BILLED',
          },
        };
      }
    });
    return paymentMethodData;
  };

  const {
    hotelChain,
    hotel,
  }: {
    hotelChain: HotelChainClass;
    hotel: HotelClass;
  } = useContext(DashContext);

  const paymentMethods = policy?.paymentMethod.data || [];
  const paymentMethodsDefault = [
    {
      id: 1,
      name: 'CREDIT_CARD',
      key: 'creditCardPaymentMethod',
      title: 'Cartão de Crédito',
      checked: false,
    },
    {
      id: 2,
      name: 'DIRECT',
      key: 'directPaymentMethod',
      title: 'Pagamento Direto',
      checked: false,
    },
    {
      id: 3,
      name: 'BILLED',
      key: 'billedPaymentMethod',
      title: 'Faturado',
      checked: false,
    },
  ];

  const getPaymentMethodsChecked = () => {
    return paymentMethodsDefault.map((e: any) => {
      return e.checked;
    });
  };

  const [edit, setEdit] = useState(false);
  const [enabled, setEnabled] = useState(getPaymentMethodsChecked);
  const [cardOnlyPhysical, setCardOnlyPhysical] = useState(
    policy?.paymentMethod.data.creditCardPaymentMethod.onlyPhysical
  );
  const [creditCards, setCreditCards] = useState(
    policy?.paymentMethod.data.creditCardPaymentMethod.creditCardBrands
  );

  const findPaymentMethods = () => {
    if (paymentMethods.length === 0) return;
    paymentMethodsDefault.forEach((e: any) => {
      const find = Object.values(paymentMethods).find((el: any) => {
        return el.paymentMethod === e.name;
      });
      e.checked = find ? true : false;
    });
  };

  // TODO - Ajeitar para informar quando não tiver nenhum metodo de pagamento selecionado

  // TODO - adicionar bandeiras de cartão de crédito

  // TODO - Policy é fixo?
  const handleSubmit = async () => {
    const activePaymentMethods = paymentMethodsDefault
      .filter((e: any, i: number) => {
        if (enabled[i]) return e;
      })
      .map((e: any) => {
        return {
          paymentMethod: e.name,
        };
      });

    let rules: any = {
      paymentMethod: {
        data: SetPaymentData(
          activePaymentMethods,
          cardOnlyPhysical,
          creditCards
        ),
        inherited: false,
      },
    };

    activePaymentMethods.find((e: any) => {
      if (e.paymentMethod === 'CREDIT_CARD') {
        rules = {
          ...rules,
          paymentPolicy: {
            data: {
              hoursVariation: 0,
              paymentPolicyEvent: 'BOOKING',
              valueCondition: {
                roomNights: 1,
              },
            },
            inherited: false,
          },
        };
      }
    });

    const payload = {
      hotelRatePolicyAlphaId: hotel.hook.data.alphaId,
      ratePolicyEntityAlphaId: policy.alphaId,
      rules,
    };
    if (payload.rules.paymentMethod.data.length === 0) {
      return;
    }
    await hotelChain.putHttp(
      'rate-policies/' + policy.alphaId + '/' + hotelChain.putMethods.rules,
      payload
    );

    const mergedData = {
      ...hotelChain.hook.data,
    };

    hotelChain.hook.setData(mergedData);
    set(hotelChain.cachePath, mergedData);
  };

  return {
    edit,
    setEdit,
    enabled,
    setEnabled,
    cardOnlyPhysical,
    setCardOnlyPhysical,
    creditCards,
    setCreditCards,
    findPaymentMethods,
    handleSubmit,
    paymentMethodsDefault,
  };
}
