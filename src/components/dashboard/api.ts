import { useEffect, useState } from "react";
import { EmployeeStats, Frequency } from "./types";

const allData = {
  monthly: {
    totalEmployeeCount: {
      value: 234,
      delta: 5,
    },
    newEmployeeCount: {
      value: 42,
      delta: 5,
    },
    resignedEmployeeCount: {
      value: 12,
      delta: 2,
    },
    jobApplicantCount: {
      value: 367,
      delta: 10,
    },
  },
  yearly: {
    totalEmployeeCount: {
      value: 200,
      delta: 10,
    },
    newEmployeeCount: {
      value: 100,
      delta: 12,
    },
    resignedEmployeeCount: {
      value: 24,
      delta: 5,
    },
    jobApplicantCount: {
      value: 1000,
      delta: 15,
    },
  },
  weekly: {
    totalEmployeeCount: {
      value: 120,
      delta: 5,
    },
    newEmployeeCount: {
      value: 3,
      delta: 2,
    },
    resignedEmployeeCount: {
      value: 0,
      delta: 0,
    },
    jobApplicantCount: {
      value: 30,
      delta: 5,
    },
  },
};

const data: EmployeeStats = {
  totalEmployeeCount: {
    value: 234,
    delta: 5,
  },
  newEmployeeCount: {
    value: 42,
    delta: 5,
  },
  resignedEmployeeCount: {
    value: 12,
    delta: 2,
  },
  jobApplicantCount: {
    value: 367,
    delta: 10,
  },
};

async function getEmployeeStats(frequency: Frequency) {
  return new Promise<EmployeeStats>((resolve) => {
    setTimeout(() => {
      resolve(allData[frequency]);
    }, 1000);
  });
}

export function useEmployeeStats({ frequency }: { frequency: Frequency }) {
  const [data, setData] = useState<EmployeeStats | null | undefined>(null);
  const [error, setError] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData(frequency: Frequency) {
    try {
      setIsLoading(true);
      const data: EmployeeStats = await getEmployeeStats(frequency);
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
    fetchData(frequency);
  }, [frequency]);

  return { isLoading, data, error };
}
