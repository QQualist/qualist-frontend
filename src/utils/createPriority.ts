import { CreatePriorityData } from "@/types/create-priority";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";
import { convertDayInSeconds } from "@/utils/convertDayInSeconds";

export const createPriority = async (data: CreatePriorityData) => {
    const userToken = getUserToken();
    return await api.post(
        "/priorities",
        {
          name: data.name,
          deadline: convertDayInSeconds(data.deadline),
          color: data.color
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}