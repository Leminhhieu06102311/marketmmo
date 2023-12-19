import axios from "axios";
import api from "./api";

export async function getMessages(access_token: string, to: string) {
  const res = await axios.get(
    `https://ultimate-implicitly-hound.ngrok-free.app/message/direct/${to}?limit=30`,
    {
      headers: {
        Authorization: "Bearer " + access_token,
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  return res.data;
}

export async function fetchUsersChat (access_token : string) {
  const res = await axios.get(
    `https://ultimate-implicitly-hound.ngrok-free.app/message/info-users-chat`,
    {
      headers: {
        Authorization: "Bearer " + access_token,
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  return res.data;
}