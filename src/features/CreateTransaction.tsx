import { Button } from "@mantine/core";
import { useCreateTransaction } from "../services/transaction-midtrans";

declare global {
  interface Window {
    snap: any;
  }
}

export const CreateTransaction: React.FC = () => {
  const { data, isLoading, isError } = useCreateTransaction();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const handlePayment = () => {
    if (data) {
      // Menggunakan Midtrans Snap untuk memproses pembayaran
      window.snap.pay(data.data, {
        onSuccess: (result: any) => {
          console.log("Payment successful:", result);
          alert("Payment successful!");
        },
        onPending: (result: any) => {
          console.log("Payment pending:", result);
          alert("Payment pending!");
        },
        onError: (result: any) => {
          console.error("Payment error:", result);
          alert("Payment failed!");
        },
        onClose: () => {
          console.log("Payment popup closed");
          alert("Payment popup closed!");
        },
      });
    } else {
      console.error("Snap Token not found");
      alert("Snap Token is missing!");
    }
  };

  return (
    <div>
      <h1>Create Transaction</h1>
      <Button onClick={handlePayment}>Pay</Button>
    </div>
  );
};
