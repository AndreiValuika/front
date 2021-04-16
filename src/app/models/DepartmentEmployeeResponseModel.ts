export interface AssignmentResponseModel {
    projectName: string;
    startDate: Date;
    endDate: Date;
  }
  
export interface DepartmentEmployeeResponseModel {
    fullName: string;
    assignments: AssignmentResponseModel[];
  }