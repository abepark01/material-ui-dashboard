import { useEffect, useState } from "react";
import { Schedule } from "./types";

const data: Schedule[] = [
  {
    time: "9 AM",
    events: [
      null,
      null,
      {
        title: "Interview with Dan Smith",
        color: "purple",
      },
      null,
      null,
    ],
  },
  {
    time: "10 AM",
    events: [
      {
        title: "Onboarding Session",
        color: "orange",
      },
      null,
      null,
      {
        title: "Interview for marketing",
        color: "purple",
      },
      null,
    ],
  },
  {
    time: "11 AM",
    events: [
      null,
      {
        title: "Monthly Performance Review",
        color: "grey",
      },
      null,
      null,
      {
        title: "Project Kickoff for v2 Migration",
        color: "green",
      },
    ],
  },
  {
    time: "12 PM",
    events: [
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
    ],
  },
  {
    time: "1 PM",
    events: [
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
    ],
  },
  {
    time: "2 PM",
    events: [
      {
        title: "Townhall Meeting",
        color: "green",
      },
      null,
      null,
      null,
      null,
    ],
  },
  {
    time: "3 PM",
    events: [
      null,
      null,
      {
        title: "Benefits Orientation",
        color: "green",
      },
      null,
      {
        title: "Performance Review",
        color: "grey",
      },
    ],
  },
  {
    time: "4 PM",
    events: [
      null,
      {
        title: "Recruitment Strategy",
        color: "brown",
      },
      null,
      null,
      null,
    ],
  },
  {
    time: "5 PM",
    events: [
      null,
      null,
      null,
      {
        title: "Department Heads Sync",
        color: "grey",
      },
      null,
    ],
  },
];

type SelectedValues = {
  [key: number]: boolean;
};

function getTasks() {
  return new Promise<Schedule[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function useTasks() {
  const [data, setData] = useState<Schedule[]>();
  const [error, setError] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setIsLoading(true);
      const payload = await getTasks();
      setData(payload);
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
