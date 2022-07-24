const fetchJSON = (url: string) => {
  return fetch(url).then((res) => res.json());
};
const postJSON = (url: string, data: Object) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export { fetchJSON, postJSON };
