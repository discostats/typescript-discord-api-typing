import {RawEventInterface} from "../raw-event";

export interface RawMessageDeleteInterface extends RawEventInterface {
    readonly t: 'MESSAGE_DELETE';
    readonly d: {
        readonly id: string;
        readonly channel_id: string;
        readonly guild_id: string;
    };
}
