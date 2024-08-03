export type StatValue = {
  value: number;
  delta: number;
};

export type EmployeeStats = {
  totalEmployeeCount: StatValue;
  newEmployeeCount: StatValue;
  resignedEmployeeCount: StatValue;
  jobApplicantCount: StatValue;
};

export type Frequency = "monthly" | "weekly" | "yearly";
