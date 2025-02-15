import { Instance } from ".";

export const postNewsRecommend = async (data) => {
  return await Instance.post("/news/trending", data);
};
