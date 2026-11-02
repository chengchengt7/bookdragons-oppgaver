import type { Employee } from "@/payload-types";

type EmployeeCardProps = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="stack employee-card">
      <img className="employee-card-photo" src={employee.profile} alt="" height="640" width="640" />
      <h3 className="section-subheading">{employee.title}</h3>
      <p>{employee.bio}</p>
    </div>
  );
}
