// import React from 'react';
// import styles from './RegisterForm.module.css';

// class RegisterForm extends React.Component {
// 	state = {
// 		email: '',
//         password: '',
//         confirmPass: '',
// 		agreement: true,
// 		imBusy: false,
// 		imWithError: false,
// 		isValidated: false
// 	};

// handleChange = (event) => {
//     const { type, name, value, checked } = event.target;

//     if (type === 'checkbox') {
//         this.setState({ [name]: checked });
//     } else {
//         this.setState({ [name]: value });
//     }
// };

// isFormValid = () => {
//     const { email, password, confirmPass, agreement } = this.state;

//     const isEmailValid = (email !== '') && (email.includes('@'));
//     const isPasswordValid = password.length > 7;
//     const isConfirmedValid = (confirmPass.length >7) && (confirmPass === password);
//     const isAgreementValid = agreement === true;

//     const conditions = [ isEmailValid, isPasswordValid, isConfirmedValid, isAgreementValid ];

//     const isConditionsValid = !conditions.includes(false);

//     return isConditionsValid;
// };

//     onFormSubmit = (event) => {
//     event.preventDefault();

//     if (this.isFormValid()) {
//         this.setState({ imBusy: true });

//         setTimeout(() => {
//             this.setState({
//                 email: '',
//                 password: '',
//                 confirmPass: '',
//                 agreement: true,
//                 imBusy: false,
//                 imWithError: false,
//                 isValidated: true
//             });
//         }, 3000);
//     } else {
//         this.setState({ 
//             imWithError: true,
//             isValidated: false 
//         });
//     }
//     };

// render() {
//     const { email, password, confirmPass, agreement, imBusy, imWithError, isValidated } = this.state;

//     return (
//         <div >
//         {imBusy ? (
//             <span>Proszę czekać</span>
//         ) : (
//             <div className={styles.RegisterForm}>
//             <form onSubmit={this.onFormSubmit}>
//                 <div className={styles.Inputs}>
//                 <div>
//                     <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="Wpisz email" 
//                     value={email} 
//                     onChange={this.handleChange} />
//                 </div>
//                 <div>
//                     <input
//                     type="password"
//                     name="password"
//                     placeholder="Wpisz hasło" 
//                     value={password}
//                     onChange={this.handleChange}
//                     />
//                 </div>
//                 <div>
//                     <input
//                     type="password"
//                     name="confirmPass"
//                     placeholder="Powtórz hasło" 
//                     value={confirmPass}
//                     onChange={this.handleChange}
//                     />
//                 </div>
//                 </div>
//                 <div>
//                     <label htmlFor="agreement">Agreement:</label>
//                     <input
//                     type="checkbox"
//                     name="agreement"
//                     checked={agreement}
//                     onChange={this.handleChange}
//                     />
//                 </div>
//                 <div className={styles.Register}>
//                     <button type="submit">Zarejestruj</button>
//                 </div>
//                 {isValidated && <span>Stworzono użytkownika</span>}
//                 {imWithError && <span>Błąd walidacji</span>}
//             </form>
//             </div>
//         )}
//     </div>
//     );
// }
// }

// export default RegisterForm;