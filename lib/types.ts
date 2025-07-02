import { Accounts } from "./generated/prisma";

export type AccountInfo = Omit<Accounts, "Password">;