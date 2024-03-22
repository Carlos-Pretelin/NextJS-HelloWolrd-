// types.ts
export default interface NewsItemProps {
    headLine: string;
    title: string;
    body: string;
    id: string;
  }
  export interface User {
    name: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
  }
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  