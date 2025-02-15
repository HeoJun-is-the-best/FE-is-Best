import { Instance } from ".";

export const getImageSearchApi = async (data) => {
  return await Instance.get(`/image/search/${data}`);
};
