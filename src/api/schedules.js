import { Instance } from ".";

export const PostScheduleSave = async (data) => {
  return await Instance.post("/schedules/save", data);
};
