
export function notUndefinedOrNull<T>(element: T | undefined | null): element is T {
    return element !== undefined && element !== null
}

export const isString = (element: unknown): element is string => {
    return typeof element === 'string'
}

export const isBoolean = (element: unknown): element is boolean => {
    return typeof element === 'boolean'
}

export const isNumber = (element: unknown): element is number => {
    return typeof element === 'number'
}