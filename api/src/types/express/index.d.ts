import { IUser } from "../../domains/models/userModel";

declare global {
    namespace Express {
        interface Request {
            user?: Partial<IUser>
        }
    }
 }