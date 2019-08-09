import {RawMemberInterface} from "./member";

export interface RawUserInterface {
    readonly username: string;
    readonly member?: RawMemberInterface;
    readonly id: string;
    readonly discriminator: string;
    readonly avatar: string;
    readonly bot?: boolean;
}
