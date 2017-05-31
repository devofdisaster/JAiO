function camelize(str) {
    var s = toString(str)

    // remove all characters that should not be in a variable name
    // as well underscores an numbers from the beginning of the string
    s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, '').trim().toLowerCase();

    // uppercase letters preceeded by a hyphen or a space
    s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function (a,b,c) {
        return c.toUpperCase();
    });

    // uppercase letters following numbers
    s = s.replace(/([0-9]+)([a-zA-Z])/g, function (a,b,c) {
        return b + c.toUpperCase();
    });

    return s;
}

function ucfirst(str) {
    return toString(str).charAt(0).toUpperCase() + str.slice(1);
}

function toString(str) {
    return (str || '') + '';
}

export { camelize, ucfirst }
