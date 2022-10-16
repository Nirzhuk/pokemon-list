export interface APIListWithPagination<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface APIURLReference{
    name: string;
    url: string
}

export enum TextAligment {
    left = 'left',
    center = 'center',
    right = 'right'
}