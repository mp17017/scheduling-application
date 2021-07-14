import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea, IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  
  

  let Tix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let Multi = [1, 2, 2, 3, 5, 5, 5, 5, 10, 10, 10, 10, 20, 30, 30, 30]
  let Count = [0, 0, 0, 0, 0]

  const [State, SetState] = React.useState(0);
  const [TAState] = React.useState(Tix);
  const [MAState] = React.useState(Multi);
  const [UCState] = React.useState(Count);

  let Val = [
    TAState[0] * MAState[0], TAState[1] * MAState[1], TAState[2] * MAState[2], TAState[3] * MAState[3],
    TAState[4] * MAState[4], TAState[5] * MAState[5], TAState[6] * MAState[6], TAState[7] * MAState[7],
    TAState[8] * MAState[8], TAState[9] * MAState[9], TAState[10] * MAState[10], TAState[11] * MAState[11],
    TAState[12] * MAState[12], TAState[13] * MAState[13], TAState[14] * MAState[14], TAState[15] * MAState[15],
  ]


  function uTix (id: number, e:any){
    
    TAState[id] = e;  
    SetState(e);
  }

  function uMulti (id: number, e:any){
    MAState[id] = e; 
    SetState(e);
  }

  function uCount (id: number, e:any){
    UCState[id] = e; 
    SetState(e);
  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lottery Balance Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={e => uTix(0, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(0, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[0]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(1, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(1, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[1]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(2, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(2, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[2]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(3, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(3, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[3]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(4, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(4, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[4]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(5, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(5, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[5]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(6, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(6, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[6]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(7, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(7, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[7]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(8, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(8, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[8]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(9, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(9, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[9]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(10, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(10, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[10]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(11, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(11, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[11]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(12, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(12, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[12]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(13, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(13, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[13]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(14, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(14, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[14]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonInput type="number" placeholder="#Tickets" onIonChange={(e) => uTix(15, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol><IonInput type="number" placeholder="Value" onIonChange={(e) => uMulti(15, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol>{Val[15]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol >Total = ${Val.reduce((a, b) => a+b)} </IonCol>
          </IonRow>
        </IonGrid>
        <IonCol>
        <IonRow> <IonLabel>Total Tickets: ${UCState[0] = Val.reduce((a, b) => a+b)}</IonLabel></IonRow>
        <IonRow> Total Cash: $<IonInput type="number" placeholder="Cash in drawer" onIonChange={(e) => uCount(1, parseInt(e.detail.value!, 10)) } ></IonInput></IonRow>
        <IonRow> Total Sales+: $<IonInput type="number" color="danger" placeholder="Sales +" onIonChange={(e) => uCount(2, parseInt(e.detail.value!, 10)) } ></IonInput></IonRow>
        <IonRow> Total Sales-: $<IonInput type="number" placeholder="Sales -" onIonChange={(e) => uCount(3, parseInt(e.detail.value!, 10)) } ></IonInput></IonRow>
        <IonRow> Total Wins: $<IonInput type="number" placeholder="Wins" onIonChange={(e) => uCount(4, parseInt(e.detail.value!, 10)) } ></IonInput></IonRow>
        <IonRow>Grand Total = ${UCState[0]+UCState[1]-UCState[2]-UCState[3]+UCState[4]}</IonRow>
        </IonCol>
        
      </IonContent>
    </IonPage>
  );
  
};


export default Tab2;
