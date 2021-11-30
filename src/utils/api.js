export const getClients = () =>
  fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(res => res.data);

export const addClient = data =>
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(data => data.json());

export const updateClient = (id, client) =>
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(client)
  })
    .then(res => res.json())
    .then(res => res.data);

export const deleteClient = id =>
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE'
  });
