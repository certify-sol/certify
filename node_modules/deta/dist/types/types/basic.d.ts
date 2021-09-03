import { Action } from './action';
export declare type BasicType = string | number | boolean;
export declare type NullType = null;
export declare type UndefinedType = undefined;
export declare type ObjectType = {
    [key: string]: ObjectType | ArrayType | BasicType | NullType | UndefinedType | Action;
};
export declare type ArrayType = Array<ArrayType | ObjectType | BasicType | NullType | UndefinedType>;
export declare type CompositeType = ArrayType | ObjectType;
export declare type DetaType = ArrayType | ObjectType | BasicType;
