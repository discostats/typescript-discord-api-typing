import {RawEventInterface} from "../raw-event";
import {RawAttachmentInterface} from "../other/attachment";
import {RawUserInterface} from "../other/user";
import {RawMemberInterface} from "../other/member";

export interface RawMessageCreateInterface extends RawEventInterface {
    readonly t: 'MESSAGE_CREATE';
    readonly d: {
        readonly type: number;
        readonly tts: boolean;
        readonly timestamp: string;
        readonly pinned: boolean;
        readonly nonce: string;
        readonly mentions: readonly RawUserInterface[];
        readonly mention_roles: readonly string[];
        readonly mention_everyone: boolean;
        readonly member: RawMemberInterface;
        readonly id: string;
        readonly embeds: readonly void[]; // TODO
        readonly edited_timestamp: string | null;
        readonly content: string;
        readonly channel_id: string;
        readonly author: RawUserInterface;
        readonly attachments: readonly RawAttachmentInterface[];
        readonly guild_id?: string;
    };
}