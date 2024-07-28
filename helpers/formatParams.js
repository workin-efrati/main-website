function decodeHebrewUrl(encodedString) {
    try {
        const replacedString = encodedString.replace(/\+/g, ' ');

        const decodedString = decodeURIComponent(replacedString);

        return decodedString;
    } catch (error) {
        console.error("Error decoding string:", error);
        return encodedString; // Return original string if decoding fails
    }
}

export function formatParams(inputParams) {
    inputParams = decodeHebrewUrl(inputParams);
    const regex = /%20/g;
    // console.log("before inputParams", { inputParams });
    const formattedParams = inputParams.replace(regex, " ");
    // console.log("after inputParams", { formattedParams }, "after inputParams")

    return formattedParams;
}