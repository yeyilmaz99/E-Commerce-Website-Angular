import { Action } from '@ngrx/store';

export const UPVOTE= '[Count] Upvote';
export const DOWNVOTE = '[Count] Downvote';

export class Upvote implements Action {
    readonly type = UPVOTE
}

export class Downvote implements Action {
    readonly type = DOWNVOTE
}

export type All = Upvote | Downvote;