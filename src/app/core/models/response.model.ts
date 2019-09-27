export interface Response {
  suceess: boolean;
  data: SigninData;
}

interface SigninData {
  user: User;
  token: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}
