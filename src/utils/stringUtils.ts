

export const capitalize = (str: string) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1))
}

export const camelCase = (str: string) => str
    .toLowerCase()
    .split(" ")
    .map((token, index) => index === 0? token: capitalize(token))
    .join("");