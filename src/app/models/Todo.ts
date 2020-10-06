export interface Todo {
    name: string;
    content: string;
    completed: boolean;
    category: TodoCategory;
}

enum TodoCategory {
    PERSONAL = 'PERSONAL',
    WORK = 'WORK',
    OTHER = 'OTHER'
}