import { User } from "./User";

export type ContextUser = {
    user: User | null,
    SignIn: ({ email, password }: { email: string; password: string; }) => Promise<void>;
    signed: boolean;
    SignOut: () => void;
}