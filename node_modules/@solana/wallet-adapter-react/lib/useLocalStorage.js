"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const react_1 = require("react");
function useLocalStorage(key, defaultState) {
    const [value, setValue] = (0, react_1.useState)(() => {
        if (typeof localStorage === 'undefined')
            return defaultState;
        const value = localStorage.getItem(key);
        if (value)
            return JSON.parse(value);
        return defaultState;
    });
    const setLocalStorage = (0, react_1.useCallback)((newValue) => {
        if (newValue === value)
            return;
        setValue(newValue);
        if (newValue === null) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    }, [value, setValue, key]);
    return [value, setLocalStorage];
}
exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map