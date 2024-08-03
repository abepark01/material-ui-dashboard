import { useEffect, useState } from "react";
import { PayrollStats } from "./types";

const data: PayrollStats = {
  totalPayrollCount: 268,
  draftCount: 13,
  overdueCount: 7,
  failedCount: 5,
  scheduledCount: 24,
  paidCount: 312,
};

async function getPayrollStats() {
  return new Promise<PayrollStats>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function usePayrollStats() {
  const [data, setData] = useState<PayrollStats>();
  const [error, setError] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setIsLoading(true);
      const data: PayrollStats = await getPayrollStats();
      setData(data);
    } catch (e: unknown) {
      if (typeof e === "string") {
        setError(e);
      } else if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data, error };
}
