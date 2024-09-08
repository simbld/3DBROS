export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  content: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
};

export type Like = {
  id: number;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
};

export type Follow = {
  id: number;
  follower_id: number;
  followed_id: number;
  created_at: string;
  updated_at: string;
};

export type Notification = {
  id: number;
  user_id: number;
  content: string;
  read: boolean;
  created_at: string;
  updated_at: string;
};

// Types pour l'état global de l'application
export type State = {
  user: User | null;
  users: User[];
  posts: Post[];
  comments: Comment[];
  likes: Like[];
  follows: Follow[];
  notifications: Notification[];
};

// Définition unique de l'état d'erreur
export type ErrorState = {
  message: string;
  code: number;
};

export type Action = {
  type: string;
  payload: any;
};

export type Dispatch = (action: Action) => void;

export type GetState = () => State;

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState,
) => Promise<void>;
