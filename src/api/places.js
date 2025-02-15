import { Instance } from ".";

export const postPlacesRecommend = (data) => {
  return Instance.post("/places/recommend", data);
};
