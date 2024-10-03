function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
        } else {
            const result = mixedArray
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase());
            resolve(result);
        }
    });
}

// Example usage
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));

