import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonButton, IonRedirect} from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { IonReactRouter } from '@ionic/react-router';
import { book, calculator, time, business, ban } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Tab4 from '../pages/Tab4';

import './Main.css';

/* Theme variables */
import { useAuth0 } from '@auth0/auth0-react';
import { NONAME } from 'dns';

const Main: React.FC = () => {
    const {user, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    return(
    <IonApp>
      <IonReactHashRouter>
        
        <IonTabs >
          <IonRouterOutlet >
            <Route exact path="/scheduling-application/tab1">
              <Tab1 />
            </Route>
            <Route  exact path="/scheduling-application/tab2">
              <Tab2 />
            </Route>
            <Route exact path="/scheduling-application/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/scheduling-application/tab4">
              <Tab4 />
            </Route>
            <Route path="/" render={() => <Redirect to="/scheduling-application/" />} exact={true} />
            <Route render={() => <Redirect to="/scheduling-application/" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/scheduling-application/tab1">
              <IonIcon icon={time} />
              <IonLabel>Cashiers</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/scheduling-application/tab2">
              <IonIcon icon={calculator} />
              <IonLabel>Lottery</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/scheduling-application/tab3">
              <IonIcon icon={business} />
              <IonLabel>Office</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/scheduling-application/tab4">
              <IonIcon icon={book} />
              <IonLabel>Notes</IonLabel>
            </IonTabButton>
            <IonTabButton >
                <IonButton onClick={() => logout()} color="none" fill="clear" size="small" href="/scheduling-application/">
                    <IonIcon icon={ban} />
                    <IonLabel >Logout</IonLabel>
                </IonButton>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactHashRouter>
    </IonApp>
    );
};
  
  export default Main;