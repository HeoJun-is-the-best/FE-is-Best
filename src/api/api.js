import { Instance } from ".";

export const PostLoginApi = async (data) => {
  return await Instance.post("/login", data);
};
