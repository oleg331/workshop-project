export interface Response {
  success: boolean;
  data: AuthData;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}
