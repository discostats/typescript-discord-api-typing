import {rawEvents} from "./constants/raw-events";

export interface RawEventInterface {
    readonly t: keyof typeof rawEvents;
    readonly s: number;
    readonly op: number;
}