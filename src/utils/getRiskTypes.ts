import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { RiskTypeData } from "@/types/risk-type";

export const getRiskTypes = async (): Promise<RiskTypeData[]> => {
  const userToken = getUserToken();

  const risk_types = await api.get(`/risk-types`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return risk_types.data;
};
