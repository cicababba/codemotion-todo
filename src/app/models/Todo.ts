export interface Todo {
    name: string;
    content: string;
    completed: boolean;
    category: TodoCategory;
}

export enum TodoCategory {
    PERSONAL = 'PERSONAL',
    WORK = 'WORK',
    OTHER = 'OTHER'
}