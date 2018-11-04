export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  accessToken: string;
  roles: {
    name: string;
  };
}

