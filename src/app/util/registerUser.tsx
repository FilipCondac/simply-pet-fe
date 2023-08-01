import axios from "axios";
import { User, Vet } from "../types/types";

export async function registerUser(data: User | Vet, isVet: boolean) {
  try {
    if (isVet) {
      const url: string = "http://localhost:8000/api/routes/registerVet";
      const response = await axios.post(url, data);
      return response.data;
    } else {
      const url: string = "http://localhost:8000/api/routes/registerUser";
      const response = await axios.post(url, data);
      return response.data;
    }
  } catch (error) {
    console.error("Error posting data", error);
    throw error;
  }
}
