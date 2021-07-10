import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea, IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { listSharp } from 'ionicons/icons';

const Tab2: React.FC = () => {
  
  

  let Tix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let Multi = [1, 2, 2, 3, 5, 5, 5, 5, 10, 10, 10, 10, 20, 30, 30, 30]

  const [TState, SetTState] = React.useState(0);
  const [MState, SetMState] = React.useState(0);
  const [TAState] = React.useState(Tix);
  const [MAState] = React.useState(Multi);

  let Val = [
    TAState[0] * MAState[0], TAState[1] * MAState[1], TAState[2] * MAState[2], TAState[3] * MAState[3],
    TAState[4] * MAState[4], TAState[5] * MAState[5], TAState[6] * MAState[6], TAState[7] * MAState[7],
    TAState[8] * MAState[8], TAState[9] * MAState[9], TAState[10] * MAState[10], TAState[11] * MAState[11],
    TAState[12] * MAState[12], TAState[13] * MAState[13], TAState[14] * MAState[14], TAState[15] * MAState[15],
  ]


  function uTix (id: number, e:any){
    
    TAState[id] = e;  
    SetTState(e);
  }

  function uMulti (id: number, e:any){
    MAState[id] = e; 
    SetMState(e);
  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Automatic Lottery Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(0, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(0, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[0]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(1, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(1, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[1]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(2, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(2, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[2]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(3, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(3, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[3]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(4, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(4, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[4]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(5, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(5, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[5]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(6, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(6, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[6]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(7, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(7, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[7]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(8, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(8, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[8]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(9, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(9, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[9]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(10, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(10, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[10]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(11, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(11, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[11]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(12, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(12, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[12]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(13, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(13, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[13]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(14, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(14, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[14]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol><input type="number" placeholder="#Tickets" onChange={(e) => uTix(15, parseInt(e.currentTarget.value, 10)) } ></input></IonCol>
            <IonCol><input type="number" placeholder="Value" onChange={(e) => uMulti(15, parseInt(e.currentTarget.value, 10))}></input></IonCol>
            <IonLabel>{Val[15]}</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonLabel>Total = ${Val.reduce((a, b) => a+b)}</IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
  
};


export default Tab2;
