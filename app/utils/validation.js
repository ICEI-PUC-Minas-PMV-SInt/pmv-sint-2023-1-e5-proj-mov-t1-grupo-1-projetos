// Regex
const LETTERS_SPACES_PATTERN = /^[A-Za-z\s]*$/;
const DATE_PATTERN = /\d{2}\/\d{2}\/\d{4}/;

export const onlyLettersAndSpaces = (text) => {
    return LETTERS_SPACES_PATTERN.test(text);
}

export const dateValid = (text) =>{
    return DATE_PATTERN.test(text);
}