export interface IregisterUsers {
  id?: string;
  role?: string;
  name: string;
  username: string;
  password?: string;
  email: string;
  description?: string;
}

export interface Iadmin {
  id?: string;
  role?: string;
  name: string;
  username: string;
  password?: string;
  email: string;
  description?: string;
}

export interface Iprojects {
  id?: string;
  pname: string;
  description: string;
  userId: string;
  uname: string;
  duedate: string;
}
export interface IUser {
  id?: string;
  name: string;
  description: string;
  role: string;
  duedate: string;
}
export interface Ilogin {
  email: string;
  password: string;
}

export interface IaddProject {
  name: string;
  userId: string;
  description: string;
  duedate: string;
}
export interface UserInterface {
  id?: string;
  username: string;
  email: string;
  name: string;
  password?: string;
  role: string;
  description: string;
}
