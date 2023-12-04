import { DashContext } from '@/app/(dashboard)/(context)/DashContext';
import HotelClass from '@/classes/Hotel/HotelClass';
import HotelChainClass from '@/classes/HotelChain/HotelChainClass';
import { set } from '@/services/cache/cache';
import { useContext, useState } from 'react';

export default function UseCancellationHook({ policy }: { policy: any }) {
  const penaltys = [
    {
      title: 'Primeira Diária',
      checked: false,
      hasInput: false,
    },
    {
      title: 'Percentual da reserva/pernoite',
      checked: false,
      hasInput: true,
    },
    {
      title: 'Valor fixo',
      checked: false,
      hasInput: true,
    },
  ];

  const {
    hotelChain,
    hotel,
  }: {
    hotelChain: HotelChainClass;
    hotel: HotelClass;
  } = useContext(DashContext);

  const getLanguageRules = (key: 'PT_BR' | 'EN_US' | 'ES_ES') => {
    return policy?.modifCancellation?.data?.description
      ? policy?.modifCancellation?.data?.description[key]
      : '';
  };

  const [allowCancellationWithoutPenalty, setAllowCancellationWithoutPenalty] =
    useState(
      policy?.modifCancellation?.data?.allowedModifHoursBeforeCheckin > 0
    );
  const [howManyHoursBeforePenalty, setHowManyHoursBeforePenalty] = useState(
    policy?.modifCancellation?.data?.allowedModifHoursBeforeCheckin || 0
  );

  const [cancellationPenalty, setCancellationPenalty] = useState(false);
  const [cancellationPenaltyOptions, setCancellationPenaltyOptions] =
    useState<any>(penaltys.map((e) => e.checked));
  const [cancellationPenaltyValue, setCancellationPenaltyValue] = useState(
    penaltys.map(() => {
      return 0;
    })
  );
  const [languageRules, setLanguageRules] = useState<string[]>([
    getLanguageRules('PT_BR'),
    getLanguageRules('EN_US'),
    getLanguageRules('ES_ES'),
  ]);
  const [edit, setEdit] = useState(false);

  const handleCheckPenalty = (index?: any) => {
    const newPenalty = cancellationPenaltyOptions.map(() => {
      return false;
    });

    newPenalty[index] = !newPenalty[index];
    setCancellationPenaltyOptions(newPenalty);
  };

  const submit = async () => {
    let rules: any = {
      modifCancellation: {
        data: {
          allowedModifHoursBeforeCheckin: allowCancellationWithoutPenalty
            ? howManyHoursBeforePenalty
            : 0,
          description: {
            PT_BR: languageRules[0],
            EN_US: languageRules[1],
            ES_ES: languageRules[2],
          },
        },
        inherited: false,
      },
    };

    if (cancellationPenalty) {
      switch (cancellationPenaltyOptions.findIndex((e: any) => e)) {
        case 0:
          rules = {
            ...rules,
            cancelPenalty: {
              byType: 'FIRST_ROOM_NIGHT_AMOUNT',
            },
          };
          break;
        case 1:
          rules = {
            ...rules,
            cancelPenalty: {
              byRoomNightPercent: cancellationPenaltyValue[1],
            },
          };
          break;
        case 2:
          rules = {
            ...rules,
            cancelPenalty: {
              byAmount: cancellationPenaltyValue[2],
            },
          };
          break;
      }
    }

    const payload = {
      hotelRatePolicyAlphaId: hotel.hook.data[0].alphaId,
      ratePolicyEntityAlphaId: policy.alphaId,
      rules,
    };

    await hotelChain.putHttp(
      'rate-policies/' + policy.alphaId + '/' + hotelChain.putMethods.rules,
      payload
    );

    const mergedData = hotelChain.hook.policy.map((e: any) => {
      if (e.alphaId === policy.alphaId) {
        return {
          ...e,
          rules: {
            ...e.rules,
            pet: payload.rules.modifCancellation,
          },
        };
      }
      return e;
    });

    hotelChain.hook.setPolicy(mergedData);
    set(hotelChain.cachePathPolicies, mergedData);
  };

  return {
    allowCancellationWithoutPenalty,
    setAllowCancellationWithoutPenalty,
    howManyHoursBeforePenalty,
    setHowManyHoursBeforePenalty,
    cancellationPenalty,
    setCancellationPenalty,
    cancellationPenaltyOptions,
    setCancellationPenaltyOptions,
    cancellationPenaltyValue,
    setCancellationPenaltyValue,
    handleCheckPenalty,
    languageRules,
    setLanguageRules,
    edit,
    setEdit,
    submit,
    penaltys,
  };
}
