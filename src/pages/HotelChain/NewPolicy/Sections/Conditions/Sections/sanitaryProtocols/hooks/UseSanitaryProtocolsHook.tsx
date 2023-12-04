'use client';

import { DashContext } from '@/app/(dashboard)/(context)/DashContext';
import HotelClass from '@/classes/Hotel/HotelClass';
import HotelChainClass from '@/classes/HotelChain/HotelChainClass';
import { set } from '@/services/cache/cache';
import { useContext, useState } from 'react';

export default function UseSanitaryProtocolsHook({ policy }: { policy: any }) {
  console.log(policy);
  const {
    hotelChain,
    hotel,
  }: {
    hotelChain: HotelChainClass;
    hotel: HotelClass;
  } = useContext(DashContext);

  const getLanguageRules = (key: 'PT_BR' | 'EN_US' | 'ES_ES') => {
    return policy?.pet?.data?.rules ? policy?.pet?.data?.rules[key] : '';
  };

  const [languageRules, setLanguageRules] = useState<string[]>([
    getLanguageRules('PT_BR'),
    getLanguageRules('EN_US'),
    getLanguageRules('ES_ES'),
  ]);
  const [edit, setEdit] = useState(false);
  const [hasAllowed, setHasAllowed] = useState(false);

  const submit = async () => {
    let rules: any = {
      data: {
        healthProtocolText: {
          PT_BR: languageRules[0],
          EN_US: languageRules[1],
          ES_ES: languageRules[2],
          inherited: false,
        },
        respTourism: hasAllowed,
      },
      inherited: false,
    };

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
            healthProtocol: payload.rules.healthProtocol,
          },
        };
      }
      return e;
    });

    hotelChain.hook.setPolicy(mergedData);
    set(hotelChain.cachePathPolicies, mergedData);
  };

  return {
    languageRules,
    setLanguageRules,
    edit,
    setEdit,
    submit,
    hasAllowed,
    setHasAllowed,
  };
}
