import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/foto-perfil.png'

import '../styles/components/sidebar.sass';
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='Stéfani Ferreira'/>
      <p className="title">Desenvolvedora</p>
      <SocialNetworks/>
      <InformationContainer />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}
export default Sidebar