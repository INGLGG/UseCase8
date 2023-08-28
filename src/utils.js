export const toCamelCase = (OriginalStr) => {
    return OriginalStr.replace(
        /(?:^\w|[A-Z]|\b\w)/g, (word, i) => i === 0 ? word.toLowerCase() : word.toUpperCase()
    ).replace(/\s+/g, '');
};