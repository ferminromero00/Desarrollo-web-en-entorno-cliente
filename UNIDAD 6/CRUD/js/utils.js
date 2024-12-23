// utils.js

export const fetch1 = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        });
}
