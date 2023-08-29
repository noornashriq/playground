import { getCustomer } from "./api";

export const ruleOne = async (msisdn: string) => {
  return await getCustomer(msisdn);
};

export const ruleTwo = async (msisdn: string) => {
  return await getCustomer(msisdn);
};
