import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// 🔹 отримати всі нотатки
export const fetchNotes = async (search = "") => {
  const response = await instance.get("/notes", {
    params: {
      search,
    },
  });
  return response.data;
};

// 🔹 отримати одну нотатку
export const fetchNoteById = async (id: string) => {
  const response = await instance.get(`/notes/${id}`);
  return response.data;
};
