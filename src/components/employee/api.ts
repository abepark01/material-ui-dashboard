import { useEffect, useState } from "react";
import { Employee } from "./types";

const randomFemaleAvatar =
  "https://xsgames.co/randomusers/assets/avatars/female";
const randomMaleAvatar = "https://xsgames.co/randomusers/assets/avatars/male";

const employees: Employee[] = [
  {
    name: "Darrel Steward",
    id: "#E3041",
    email: "darrelste@mail.com",
    role: "Sr. Project Manager",
    status: "Active",
    avatar: `${randomMaleAvatar}/20.jpg`,
  },
  {
    name: "Wade Warren",
    id: "#E3042",
    email: "wadewarr@mail.com",
    role: "Jr. Developer",
    status: "Active",
    avatar: `${randomMaleAvatar}/21.jpg`,
  },
  {
    name: "Jerome Bell",
    id: "#E3043",
    email: "jeromebell@mail.com",
    role: "Sr. Human Resources",
    status: "Active",
    avatar: `${randomMaleAvatar}/22.jpg`,
  },
  {
    name: "Marvin McKinney",
    id: "#E3044",
    email: "marvinmck@mail.com",
    role: "Sr. Developer",
    status: "Active",
    avatar: `${randomMaleAvatar}/23.jpg`,
  },
  {
    name: "Brooklyn Simmons",
    id: "#E3045",
    email: "brooklynsimm@mail.com",
    role: "Sr. Product Designer",
    status: "Active",
    avatar: `${randomFemaleAvatar}/24.jpg`,
  },
];

function getEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 3000);
  });
}

export function useEmployees() {
  const [data, setData] = useState<Employee[]>();
  const [error, setError] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchEmployees() {
    try {
      setIsLoading(true);
      const employees: Employee[] = await getEmployees();
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
