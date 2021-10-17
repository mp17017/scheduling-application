import React from 'react';
import { IonContent, IonButton, IonApp, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonItem} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {useAuth0} from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
return(




<IonApp>
    <IonReactRouter>
        <IonPage >
                <IonHeader >
                <IonToolbar class='textbacklb'>
                    <IonTitle class='titlefontlb'>Welcome to the Front End Coordination ToolKit</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonItem class="textfontlb">
                        <IonLabel>Please login with Auth0 to use this application.</IonLabel>
                </IonItem>
                <IonContent fullscreen class='contentlb'>
                    <div>
                        <IonButton onClick={() => loginWithRedirect()} expand="full" size="large" class="bottombuttonlb"> Login with Auth0</IonButton>
                    </div>
                </IonContent>
            </IonPage>
    </IonReactRouter>
</IonApp>
);
};

export default LoginButton;