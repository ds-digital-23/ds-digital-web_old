
/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loggedInPageCSS from './loggedInPage.module.scss';


const LoggedInPage = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const navigate = useNavigate();

 

  return (
    <div>

      <div className={loggedInPageCSS.app}>
        <div className={loggedInPageCSS.side_nav}>
          <img className={loggedInPageCSS.logo} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f41b1794a0cee842c7b2" alt="" />
          <button className={loggedInPageCSS.get_quote}>GET INSTANT QUOTE</button>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg" alt="" />
            Home

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/974/974510.png" alt="" />
            Flights

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/568/568717.png" alt="" />
            Process

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png" alt="" />
            Deliverables

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/3712/3712174.png" alt="" />
            Products

          </div>
        </div>
        <div className={loggedInPageCSS.right_side}>
          <div className={loggedInPageCSS.account_wrapper}>
            <div className={loggedInPageCSS.account} onClick={() => setLogoutVisible(!logoutVisible)}>
              Rihards Hanriot Karlauskis
              <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/310/310818.png" alt="" />
            </div>

          </div>         
            <div className={`${(logoutVisible ? loggedInPageCSS.logout : loggedInPageCSS.hidden)}`} onClick={() => navigate('/')}>Log out</div>


          <div className={loggedInPageCSS.footer}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};
export default LoggedInPage;
