import {RawMemberInterface} from "./member";

export interface RawRoleInterface {
    readonly username: string;
    readonly member: RawMemberInterface;
    readonly id: string;
    readonly discriminator: string;
    readonly bot: boolean;
    readonly avatar: string | null;
}
