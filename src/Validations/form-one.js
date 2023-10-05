export const validateTitleMovie = (movieName) => {

    const length = movieName.length;
    if(length >= 3 && length <= 20) {
        return true;
    }else {
        return false;
    }
}

export const validateUrlVideo = (urlVideo) => {

    let regex = /^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]+\?si=[A-Za-z0-9_-]+$/;

    if(regex.test(urlVideo)) {
        return true;
    }else {
        return false;
    }
}

export const validateUrlImage = (urlImage) => {

    let regex = /^https:\/\/img\.youtube\.com\/vi\/[A-Za-z0-9_-]+\/maxresdefault\.jpg$/;

    if(regex.test(urlImage)) {
        return true;
    }else {
        return false;
    }
}

export const validateGenre = (genre) => {
    if(genre !== ''){
        return true;
    }else {
        return false;
    }
}

export const validateSynopsis = (synopsis) => {

    const length = synopsis.length;
    if(length >= 3 && length <= 200) {
        return true;
    }else {
        return false;
    }
}