{
  type Patient = {
    name: string;
    age: number;
    id: string;
    bloodGroup: "O" | "A" | "B" | "AB";
    factor: "+" | "-";
  };

  const emu: Patient = {
    id: "12341D",
    name: "Israt Jahan",
    age: 27,
    bloodGroup: "B",
    factor: "+",
  };

  type Doctor = {
    name: string;
    designation: string;
    totalPatient: number;
  };
  type Employee = {
    name: string;
    designation: string;
    taskTodo: number;
  };

  type HospitalStaff = Doctor | Employee;

  const staff1: HospitalStaff = {
    name: "Amin",
    designation: "Manager",
    taskTodo: 13,
  };
}

{
  type DoctorType = "MedicineDoctor" | "SurgeryDoctor" | "PathologyDoctor";
  type MedicineDoctor = {
    name: string;
    type: DoctorType;
    education: string;
    exp: number;
    total_patient: number;
  };

  type SurgeryDoctor = {
    name: string;
    type: DoctorType;
    education: string;
    exp: number;
    total_oparation: number;
  };
  type PathologyDoctor = {
    type: DoctorType;
    name: string;
    education: string;
    exp: number;
    total_test: number;
  };

  type Doctor = MedicineDoctor & SurgeryDoctor & PathologyDoctor;

  const newDoc: Doctor = {
    name: "a",
    education: "AMC",
    type: "MedicineDoctor",
    exp: 12,
    total_patient: 123,
    total_oparation: 0,
    total_test: 0,
  };
}
