const apiUrl = 'https://foodwaste-ecb78.firebaseio.com';
const appKey = 'AIzaSyCVVIiKXCqCGhTP7KCs1EkrTN7rm116-eI';

class Api {
    user = null;
    userChanged = () => { }

    constructor() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    todoCollection() {
        return `${apiUrl}/user/${this.user.localId}/todo.json?auth=${this.user.idToken}`;
    }

    todoResource(todoId) {
        return `${apiUrl}/user/${this.user.localId}/todo/${todoId}.json?auth=${this.user.idToken}`;
    }

    handleLogout(resp) {
        if (resp.status === 401) {
            this.setUser(null);
            throw new Error('Unauthorized');
        }
        return resp;
    }

    addTodo(text) {
        return fetch(this.todoCollection(), {
            method: 'POST',
            body: JSON.stringify({ text: text, active: true })
        });
    }

    setActive(todoId, active) {
        return fetch(this.todoResource(todoId), {
            method: 'PATCH',
            body: JSON.stringify({ active: active })
        });
    }

    delete(todoId) {
        return fetch(this.todoResource(todoId), {
            method: 'DELETE'
        });
    }

    updateText(todoId, newText) {
        return fetch(this.todoResource(todoId), {
            method: 'PATCH',
            body: JSON.stringify({ text: newText })
        });
    }

    listTodos() {
        return fetch(this.todoCollection())
            .then(res => this.handleLogout(res))
            .then(res => res.json())
            .then(res => res ? res : {})
            .then(obj => Object.keys(obj).map(key => {
                const todo = obj[key];
                todo.id = key;
                return todo;
            })).catch(err => console.log(err));
    }

    logIn(email, password) {
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${appKey}`, {
            body: JSON.stringify({ email: email, password: password, returnSecureToken: true }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            return resp.json().then(err => {
                throw new Error(`Login failed ${err.message}`);
            });
        }).then(user => this.setUser(user));
    }

    register(email, password) {
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${appKey}`, {
            body: JSON.stringify({ email: email, password: password, returnSecureToken: true }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            return resp.json().then(err => {
                throw new Error(`Login failed ${err.message}`);
            });
        }).then(user => this.setUser(user));
    }

    setUser(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.userChanged(user);
        return user;
    }

    onUserChange(cb) {
        this.userChanged = cb;
        cb(this.user);
    }
}

export default new Api();