export declare enum ActionTypes {
    Set = "set",
    Trim = "trim",
    Increment = "increment",
    Append = "append",
    Prepend = "prepend"
}
export declare class Action {
    readonly operation: ActionTypes;
    readonly value: any;
    constructor(action: ActionTypes, value?: any);
}
