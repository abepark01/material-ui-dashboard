import { useEffect, useState } from "react";
import { Task } from "./types";

const randomFemaleAvatar =
  "https://xsgames.co/randomusers/assets/avatars/female";
const randomMaleAvatar = "https://xsgames.co/randomusers/assets/avatars/male";

const data: Task[] = [
  {
    id: "#E3041",
    name: "Create branded collateral",
    count: 3,
    completed: false,
    dueDate: new Date(2023, 9, 30),
    members: [
      `${randomFemaleAvatar}/70.jpg`,
      `${randomFemaleAvatar}/71.jpg`,
      `${randomMaleAvatar}/70.jpg`,
      `${randomMaleAvatar}/71.jpg`,
    ],
    progress: 25,
  },
  {
    id: "#E3042",
    name: "Develop bran guidelines",
    count: 2,
    completed: false,
    dueDate: new Date(2023, 10, 4),
    members: [
      `${randomFemaleAvatar}/1.jpg`,
      `${randomFemaleAvatar}/2.jpg`,
      `${randomMaleAvatar}/3.jpg`,
      `${randomMaleAvatar}/4.jpg`,
    ],
    progress: 25,
  },
  {
    id: "#E3043",
    name: "Refine UX/U for product pages",
    count: 6,
    completed: false,
    dueDate: new Date(2023, 10, 3),
    members: [
      `${randomFemaleAvatar}/5.jpg`,
      `${randomFemaleAvatar}/6.jpg`,
      `${randomMaleAvatar}/7.jpg`,
      `${randomMaleAvatar}/8.jpg`,
    ],
    progress: 10,
  },
  {
    id: "#E3044",
    name: "Collaborate on website redesign",
    dueDate: new Date(2023, 9, 23),
    count: 6,
    completed: true,
    members: [
      `${randomFemaleAvatar}/9.jpg`,
      `${randomFemaleAvatar}/10.jpg`,
      `${randomMaleAvatar}/11.jpg`,
      `${randomMaleAvatar}/12.jpg`,
    ],
    progress: 100,
  },
  {
    id: "#E3045",
    name: "Conduct A/B testing on homepage",
    count: 2,
    completed: true,
    dueDate: new Date(2023, 9, 23),
    members: [
      `${randomFemaleAvatar}/13.jpg`,
      `${randomFemaleAvatar}/14.jpg`,
      `${randomMaleAvatar}/15.jpg`,
      `${randomMaleAvatar}/16.jpg`,
    ],
    progress: 100,
  },
  {
    id: "#E3046",
    name: "Develop social media graphics",
    count: 5,
    completed: true,
    dueDate: new Date(2023, 9, 30),
    members: [
      `${randomFemaleAvatar}/17.jpg`,
      `${randomFemaleAvatar}/18.jpg`,
      `${randomMaleAvatar}/19.jpg`,
      `${randomMaleAvatar}/20.jpg`,
    ],
    progress: 100,
  },
  {
    id: "#E3047",
    name: "Finalize logo variations",
    count: 3,
    completed: true,
    dueDate: new Date(2023, 10, 4),
    members: [
      `${randomFemaleAvatar}/21.jpg`,
      `${randomFemaleAvatar}/22.jpg`,
      `${randomMaleAvatar}/23.jpg`,
      `${randomMaleAvatar}/24.jpg`,
    ],
    progress: 100,
  },
];

function getData(): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

export function useTasks() {
  const [data, setData] = useState<Task[]>();
  const [error, setError] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchEmployees() {
    try {
      setIsLoading(true);
      const employees: Task[] = await getData();
      setData(employees);
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
    fetchEmployees();
  }, []);

  return { isLoading, data, error };
}
