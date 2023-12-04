export interface TaxesInterface {
  id: number;
  title: string;
  paymentType: 'money' | 'percent' | null;
  value: number;
  checked: boolean;
}
