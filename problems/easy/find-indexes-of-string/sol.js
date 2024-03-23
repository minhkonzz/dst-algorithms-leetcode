var strStr = function(haystack, needle) {
    const indexes = [];
    let i = 0;
    while (i < haystack.length) {
        const sublen = needle.length;
        if (haystack[i] === needle[0] && haystack.substring(i, i + sublen) === needle) {
            indexes.push(i);
            i += sublen;
            continue;
        } 
        ++i;
    }
    return indexes || -1;
};

strStr("yqHelloWorld6Helloabc", "Hello");