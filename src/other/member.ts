import {RawRoleInterface} from "./role";

export interface RawMemberInterface {
    readonly roles: readonly RawRoleInterface[];
    readonly mute: boolean;
    readonly joined_at: string;
    readonly hoisted_role: string | null;
    readonly deaf: boolean;
}
