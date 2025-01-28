export const Fetch = (URL) => {
    return fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json))
};