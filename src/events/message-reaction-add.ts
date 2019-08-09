import {RawEventInterface} from "../raw-event";
import {RawEmojiInterface} from "../other/emoji";

export interface RawMessageReactionAddInterface extends RawEventInterface {
    readonly t: 'MESSAGE_REACTION_ADD';
    readonly d: {
        readonly user_id: string;
        readonly message_id: string;
        readonly emoji: RawEmojiInterface;
        readonly channel_id: string;
        readonly guild_id: string;
    };
}
