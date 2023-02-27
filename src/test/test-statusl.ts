export interface Tasks{
    id : string;
    title : string;
    description : string;
    status : TaskStatus;
}

export enum TaskStatus{
    OPEN = 'OPEN',
    INPROGRESS = 'INPROGRESS',
    DONE = 'DONE',
}