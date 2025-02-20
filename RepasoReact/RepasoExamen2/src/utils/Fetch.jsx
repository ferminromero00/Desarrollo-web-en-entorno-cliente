const Fetch = (URL) => { return fetch(URL).then((res) => res.json()); };
export default Fetch