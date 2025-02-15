import { Instance } from ".";

export const PostLoginApi = async (data) => {
  return await Instance.post("/login", data);
};

export const PostSignupApi = async (data) => {
  return await Instance.post("/signup", data);
};
