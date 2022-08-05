export interface todo{
    id: number,
    name: string,
    description: string,
    start_date: string,
    status:string,
}
export interface allContactResponse{
    data:todo[]
}