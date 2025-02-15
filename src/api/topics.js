import { Instance } from ".";

export const PostRecommendPlaceApi = async (data) => {
  return await Instance.post("/topics/ai", data);
};

export const GetMyTopicsApi = async (id) => {
  return await Instance.get(`/topics/${id}`);
};
