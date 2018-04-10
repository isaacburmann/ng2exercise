export interface User {
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  };
  name: {
    first: string,
    last: string
  };
  email: string;
  phone: string;
}
