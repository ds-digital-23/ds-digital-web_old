import { useNavigate } from 'react-router-dom';
import homePageCSS from './DSPage.module.scss';


const DSPage = () => {
  const navigate = useNavigate();



  return (
    <div className={homePageCSS.container}>
      <div className={homePageCSS.first_header}>
        <div className={homePageCSS.first_header_logo_box}>
          <img className={homePageCSS.logo} src="https://static.wixstatic.com/media/32ebcf_dc20b9f0bd674ffdaaa1aeb3ba6b6331~mv2.png/v1/fill/w_152,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20DS%20-%20Branca%20Transparente%20-%20Marca%20Registrada.png" alt="" />

        </div>
        <div className={homePageCSS.text}>contato@dronessolution.com.br</div>
        <div>
          <button onClick={() => navigate('/sign-up-as-client')}>Sign Up</button>
          <button onClick={() => navigate('/sign-up-as-client')}>Log In</button>
        </div>
      </div>

    </div>

  );
};

export default DSPage;

