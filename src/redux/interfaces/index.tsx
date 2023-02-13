import { User } from '../../shared/types/user.type';

export interface IUserReducer {
  email: User | null;
  token: User | null;
  id: User | null;
}
