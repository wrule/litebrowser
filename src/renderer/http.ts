
export
async function post(url: string, body: any) {
  return await fetch('http://localhost:51276' + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
