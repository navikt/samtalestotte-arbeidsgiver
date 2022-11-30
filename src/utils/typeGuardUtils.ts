import { HeaderLevel } from '../dokumentgenerator/domainInterfaces';

export function notUndefinedOrNull<T>(element: T | undefined | null): element is T {
    return element !== undefined && element !== null;
}

export const isString = (element: unknown): element is string => {
    return typeof element === 'string';
};

export const isBoolean = (element: unknown): element is boolean => {
    return typeof element === 'boolean';
};

export const isNumber = (element: unknown): element is number => {
    return typeof element === 'number';
};

export function isHeaderLevel(headerLevel: string): headerLevel is HeaderLevel {
    return ['1', '2', '3', '4', '5', '6'].includes(headerLevel);
}