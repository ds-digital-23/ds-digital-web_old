/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable global-require */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signUpClientCSS from './signUpPageClient.module.scss';



const SignUpPageClient = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNr, setphoneNr] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [pageView, setPageView] = useState(2);

  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmedPassword, setSeeConfirmedPassword] = useState(false);

  const [formErrors, setFormErrors] = useState({
    fullname: '', email: '', password: '', confirmPassword: '', phoneNr: '', companyName: '',
  });

  const [profileData, setProfileData] = useState()


  const navigate = useNavigate();




  const validateForm = () => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errors = {
      fullname: '', email: '', password: '', confirmPassword: '', phoneNr: '', companyName: '',
    };
    if (!fullname) {
      errors.fullname = 'fullname is required';
    } if (fullname) {
      errors.fullname = '';
    } if (!email) {
      errors.email = 'email is required';
    } if (email) {
      errors.email = 'invalid email';
    } if (email.match(validEmail)) {
      errors.email = '';
    } if (!password) {
      errors.password = 'password is required';
    } if (password) {
      errors.password = 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
    } if (password.match(validPassword)) {
      errors.password = '';
    } if (!confirmPassword) {
      errors.confirmPassword = 'password is required';
    } if (confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } if (confirmPassword === password) {
      errors.confirmPassword = '';
    } if (!phoneNr) {
      errors.phoneNr = 'phone number is required';
    } if (phoneNr) {
      errors.phoneNr = '';
    } if (!companyName) {
      errors.companyName = 'company name is required';
    } if (companyName) {
      errors.companyName = '';
    } setFormErrors(errors);
  };





  return (
    <div className={signUpClientCSS.container}>
      <img className={signUpClientCSS.logo} src="https://static.wixstatic.com/media/32ebcf_dc20b9f0bd674ffdaaa1aeb3ba6b6331~mv2.png/v1/fill/w_152,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20DS%20-%20Branca%20Transparente%20-%20Marca%20Registrada.png" alt="logo" />
      {pageView === 1 ? (
        <form className={signUpClientCSS.form}>
          <div className={signUpClientCSS.login_register_box}>
            <div onClick={() => setPageView(2)} className={signUpClientCSS.form_title}>Login</div>
            <div onClick={() => setPageView(1)} className={signUpClientCSS.selected_form_title}>Register</div>
          </div>

          <div className={signUpClientCSS.form_child}>
            <label htmlFor="fullname">
              Full Name
              <input className={signUpClientCSS.input} type="text" onChange={(event) => setFullname(event.target.value)} />
              {formErrors.fullname && <p className={signUpClientCSS.form_error}>{formErrors.fullname}</p>}
            </label>
            <label htmlFor="email">
              Email
              <input className={signUpClientCSS.input} type="text" onChange={(event) => setEmail(event.target.value)} />
              {formErrors.email && <p className={signUpClientCSS.form_error}>{formErrors.email}</p>}
            </label>
            <label htmlFor="password">
              Password
              <div className={signUpClientCSS.passwordWrapper}>
                <input autoComplete="on" className={signUpClientCSS.input} type={seePassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} />
                <div onClick={() => setSeePassword(!seePassword)}>
                  <img className={signUpClientCSS.eye} src={!seePassword ? 'https://cdn3.iconfinder.com/data/icons/modern-user-interface-8/512/48.eye_2-01-512.png' : 'https://cdn0.iconfinder.com/data/icons/essentials-basic-ui-pack/32/eye-512.png'} alt="eye" />
                </div>
              </div>
              {formErrors.password && <p className={signUpClientCSS.form_error}>{formErrors.password}</p>}
            </label>
            <label htmlFor="password">
              Confirm Password
              <div className={signUpClientCSS.passwordWrapper}>
                <input autoComplete="on" className={signUpClientCSS.input} type={seeConfirmedPassword ? 'text' : 'password'} onChange={(event) => setConfirmPassword(event.target.value)} />
                <div onClick={() => setSeeConfirmedPassword(!seeConfirmedPassword)}>
                  <img className={signUpClientCSS.eye} src={!seeConfirmedPassword ? 'https://cdn3.iconfinder.com/data/icons/modern-user-interface-8/512/48.eye_2-01-512.png' : 'https://cdn0.iconfinder.com/data/icons/essentials-basic-ui-pack/32/eye-512.png'} alt="eye" />
                </div>
              </div>

              {formErrors.confirmPassword && <p className={signUpClientCSS.form_error}>{formErrors.confirmPassword}</p>}
            </label>
            <label htmlFor="phoneNr">
              Phone number
              <input className={signUpClientCSS.input} type="tel" onChange={(event) => setphoneNr(event.target.value)} />
              
              {formErrors.phoneNr && <p className={signUpClientCSS.form_error}>{formErrors.phoneNr}</p>}
            </label>
            <label htmlFor="companyName">
              Company name
              <input className={signUpClientCSS.input} type="text" onChange={(event) => setCompanyName(event.target.value)} />
              {formErrors.companyName && <p className={signUpClientCSS.form_error}>{formErrors.companyName}</p>}
            </label>
            <button className={signUpClientCSS.submit_button} type="submit">SUBMIT</button>
          </div>
          
        </form>
      ) : (
        <form className={signUpClientCSS.form}>
          <div className={signUpClientCSS.login_register_box}>
            <div onClick={() => setPageView(2)} className={signUpClientCSS.selected_form_title}>Login</div>
            <div onClick={() => setPageView(1)} className={signUpClientCSS.form_title}>Register</div>
          </div>
          <div className={signUpClientCSS.form_child}>
            <label htmlFor="email">
              Email
              <input className={signUpClientCSS.input} type="text" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label htmlFor="password">
              Password
              <div className={signUpClientCSS.passwordWrapper}>
                <input autoComplete="on" className={signUpClientCSS.input} type={seePassword ? 'text' : 'password'} onChange={(event) => setPassword(event.target.value)} />
                <div onClick={() => setSeePassword(!seePassword)}>
                  <img className={signUpClientCSS.eye} src={!seePassword ? 'https://cdn3.iconfinder.com/data/icons/modern-user-interface-8/512/48.eye_2-01-512.png' : 'https://cdn0.iconfinder.com/data/icons/essentials-basic-ui-pack/32/eye-512.png'} alt="eye" />
                </div>
              </div>
              <div className={signUpClientCSS.forgot_password}>Forgot password?</div>
            </label>
            <button onClick={() => navigate('/logged-in-page')} className={signUpClientCSS.submit_button} type="button">LOG IN</button>
            <div className={signUpClientCSS.space} />
            <div className={signUpClientCSS.not_registered}>
              Not registered?
              <div onClick={() => setPageView(1) } className={signUpClientCSS.create_an_account}>Create an account</div>

            </div>
          </div>
        </form>

      )}
    </div>

  );
};

export default SignUpPageClient;
