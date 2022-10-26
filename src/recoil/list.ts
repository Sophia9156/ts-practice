import axios from "axios";
import { selector } from "recoil";

const INSTAGRAM_USER_ID = process.env.REACT_APP_INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

export const instagramSelector = selector({
  key: "listSelector",
  get: async () => {
    try {
      const fields = "id,media_type,media_url,permalink,thumbnail_url,username,caption";
      const instagram = await axios.get(`https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=${fields}&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
      return instagram.data.data;
    } catch (error) {
      throw error;
    }
  }
});