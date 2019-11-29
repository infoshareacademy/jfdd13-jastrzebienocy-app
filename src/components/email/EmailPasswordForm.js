import React from 'react';
import styles from '..//RegisterForm.module.css'

export class EmailPasswordForm extends React.Component {
    state = {
        email: '',
        password: '',
        err: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.apiMethod(this.state.email, this.state.password)
            .catch(err => this.setState({ err: err.message }));
    }

    render() {
        return (
            <form className={styles.Inputs} onSubmit={this.onSubmit}>
                <div className={styles.mailBox}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                </div>
                <div>
                    <label>Hasło: </label>
                    <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                </div>
                </div>
                <button type="submit">Zatwierdź</button>
                {this.state.err && <p style={{ color: 'red' }}>{this.state.err}</p>}
            </form>
        )
    }
}