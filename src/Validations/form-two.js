export const validateGenre = (genre) => {
    const length = genre.length;

    if(length >= 3 && length <= 20) {
        return true;
    }else {
        return false;
    }
}

export const validateDescription = (description) => {
    const length = description.length;

    if(length >= 3 && length <= 200) {
        return true;
    }else {
        return false;
    }
}

export const validateColor = (color) => {
    const length = color.length;

    if(length >= 3 && length <= 20) {
        return true;
    }else {
        return false;
    }
}