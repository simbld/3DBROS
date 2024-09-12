declare global {
  type CartItem = {
    productId: number;
    name: string;
    quantity: number;
    price: number;
  };

  type Cart = {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
  };

  type CartItem = {
    productId: number;
    name: string;
    quantity: number;
    price: number;
  };

  type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
  };

  type Order = {
    id: number;
    productId: number;
    quantity: number;
    totalPrice: number;
    status: string;
  };

  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
  };

  type Post = {
    id: number;
    title: string;
    content: string;
    user_id: number;
    created_at: string;
    updated_at: string;
  };

  type Comment = {
    id: number;
    content: string;
    user_id: number;
    post_id: number;
    created_at: string;
    updated_at: string;
  };

  type Like = {
    id: number;
    user_id: number;
    post_id: number;
    created_at: string;
    updated_at: string;
  };

  type Follow = {
    id: number;
    follower_id: number;
    followed_id: number;
    created_at: string;
    updated_at: string;
  };

  type Notification = {
    id: number;
    user_id: number;
    content: string;
    read: boolean;
    created_at: string;
    updated_at: string;
  };

  // Types pour l'état global de l'application
  type State = {
    user: User | null;
    users: User[];
    posts: Post[];
    comments: Comment[];
    likes: Like[];
    follows: Follow[];
    notifications: Notification[];
  };

  type Action = {
    type: string;
    payload: any;
  };

  type Dispatch = (action: Action) => void;

  type GetState = () => State;
}

export {};
