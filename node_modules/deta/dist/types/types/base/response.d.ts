import { NullType, ObjectType, ArrayType } from '../basic';
export declare type DeleteResponse = NullType;
export declare type PutResponse = ObjectType | NullType;
export declare type GetResponse = ObjectType | NullType;
export declare type InsertResponse = ObjectType;
export interface PutManyResponse {
    processed: {
        items: ArrayType;
    };
}
export declare type UpdateResponse = NullType;
export interface FetchResponse {
    items: ObjectType[];
    count: number;
    last?: string;
}
