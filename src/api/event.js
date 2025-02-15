import { Instance } from ".";

export const GetEventApi = async (data) => {
  return await Instance.post("/events", data);
};
