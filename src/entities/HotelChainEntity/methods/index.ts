export const HttpMethods = {
  POST: null,
  GET: {
    ratePolicies: 'rate-policies',
  },
  PUT: {
    legalInfo: 'legal-info',
    responsibleInfo: 'responsible-info',
    contacts: 'contacts',
    rules: 'rules',
  },
  DELETE: null,
} as const
