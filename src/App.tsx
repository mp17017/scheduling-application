import Main from './components/Main';
import LoginButton from './components/LoginButton';
//import LogoutButton from './components/logOut';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useAuth0} from '@auth0/auth0-react';



function Authenticated(): JSX.Element{
  const {user, isAuthenticated} = useAuth0();

  if (isAuthenticated){return (<Main />)};
  if (!isAuthenticated){return (<LoginButton />)};
  return(<> </>);
}

const App: React.FC = () => (
  <Authenticated />
);

export default App;
