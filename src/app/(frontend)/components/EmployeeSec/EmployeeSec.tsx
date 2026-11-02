import type { EmployeeBlockType } from "@/payload-types";
import EmployeeCard from "../EmployeeCard/EmployeeCart";

type EmployeeSecProps = {
  section: EmployeeBlockType;
};

export default function EmployeeSec({ section }: EmployeeSecProps) {
  return (
    <section className="m-b-xl stack stack-large">
      <h2 className="section-heading">{section.title}</h2>
      <div className="section section-green">
        <div className="container grid three-columns">
          {section.employees.map((employee) => (
            typeof employee !== "number" && (
              <EmployeeCard key={employee.id} employee={employee} />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
