import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea} from '@ionic/react';
import './Tab1.css';
  
const Tab1: React.FC = () => {

    const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
    const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(1);

    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register Organization</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        
          <IonList>
            <IonItemDivider>Note: Time is in quarterly military time.
            </IonItemDivider>
            <IonItemDivider>
            <IonInput type="number" value={inputfieldsToAdd} onIonChange={(e) => setInputfieldsToAdd(parseInt(e.detail.value!, 10))}/>
            </IonItemDivider>
            <IonItem>
            <IonButton color="primary" onClick={()=>setCommittedFieldsToAdd(inputfieldsToAdd)}>Add Cashier</IonButton>
            </IonItem>
            {/*<IonLabel>Coverage Map</IonLabel>
            <IonItem>
              {committedFieldsToAdd > 0 ? [...Array(committedFieldsToAdd)].map((value: number, index: number) => (<Counter id={index + 1} key={index} />)):
            <IonLabel color="danger">Number of Cashiers must be positive</IonLabel>}
            </IonItem>*/}
            {committedFieldsToAdd > 0 ? [...Array(committedFieldsToAdd)].map((value: number, index: number) => (<Field id={index + 1} key={index} />)):
            <IonLabel color="danger">Number of Cashiers must be positive</IonLabel>}
          </IonList>
        </IonContent>
      </IonPage>
    ); 
  };

  const Counter = ({ id }: {id: number}) => (
    <div className="rangeCounter">
      <IonLabel>hi</IonLabel>
    </div>
  );

  const Field = ({ id }: { id: number }) => (
    <div className="slidecontainer">
        <IonItem lines="none">
        <IonInput id={`name${id}`} placeholder="Cashier Name" ></IonInput>
        <IonInput id={`note${id}`} placeholder="Notes" ></IonInput>
        </IonItem>
        <IonItem lines="none">
        <IonInput id={`Register${id}`} placeholder="Early Reg #" ></IonInput>
        <IonRange id={`FCoverage${id}`} dualKnobs={true}  pin={true}  min={700} max={2100} step={25} snaps={true} ticks={true} color="secondary"  />
        </IonItem>
        <IonItem lines="none">
        <IonInput id={`Register2${id}`} placeholder="Late Reg #" ></IonInput>
        <IonRange id={`LCoverage${id}`} dualKnobs={true} pin={true}  min={700} max={2100} step={25} snaps={true} ticks={true} color="secondary" />
        </IonItem>
        <IonItem>
        <IonTextarea id={`textArea${id}`} placeholder="Complicated Notes" ></IonTextarea>
        </IonItem>
    </div>
    );

export default Tab1;
