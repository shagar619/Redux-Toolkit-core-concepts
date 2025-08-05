

export interface ITask {
     id: string;
     title: string;
     description: string;
     priority: "High" | "Medium" | "Low";
     dueDate: string;
     isCompleted: boolean;
     assignedTo: string | null;
}
