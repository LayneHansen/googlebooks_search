const api = {
    getTodos: function () {
        return fetch('/api/todos').then(res => res.json());
    }
}

export default api;