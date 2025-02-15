import { Instance } from ".";

export const PostScheduleSave = async (data) => {
  return await Instance.post("/schedules/save", data);
};

export const GetSchedule = async (data) => {
  return await Instance.get("/schedules", data);
};
