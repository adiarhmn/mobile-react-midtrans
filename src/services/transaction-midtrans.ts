import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const createTransaction = async () => {
    const response = await axios.post("https://latihanmidtrans.adiauliarahman.tech/api/create-transaction");
    return response.data;
};

export const useCreateTransaction = () => {
  return useQuery({
    queryKey: ["create-transaction"],
    queryFn: createTransaction,
    throwOnError: (error) => {
      console.error(error);
      return false;
    },
  });
};
