import {RawUserInterface} from "../other/user";

export interface RawGuildMemberAddInterface {
    readonly t: 'GUILD_MEMBER_ADD';
    readonly d: {
        readonly user: RawUserInterface;
        readonly roles: readonly string[];
        readonly nick: string;
        readonly mute: boolean;
        readonly joined_at: string;
        readonly guild_id: string;
        readonly deaf: boolean;
    };
}
