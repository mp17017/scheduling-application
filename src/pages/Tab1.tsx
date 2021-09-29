import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea} from '@ionic/react';
import './Tab1.css';
  
const Tab1: React.FC = () => {
  console.log("Made with love <3 Michael Perry - https://github.com/mp17017");

    const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
    const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(1);
    
    return (
      <IonPage >
        <IonHeader >
          <IonToolbar class='textback1'>
            <IonTitle class='titlefont1'>Register Organization</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen class='content1'>
        
          <IonList class='textback1'>
            <IonItemDivider class='textfont1'>Note: Time is in quarterly military time.
            </IonItemDivider>
            <IonItemDivider class='textback1'>
            <IonInput class='textfont1' type="number" value={inputfieldsToAdd} onIonChange={(e) => setInputfieldsToAdd(parseInt(e.detail.value!, 10))}/>
            </IonItemDivider>
            <IonItem class='textback1'>
            <IonButton color="primary" onClick={()=>setCommittedFieldsToAdd(inputfieldsToAdd)}>Add Cashier</IonButton>
            </IonItem>
            {committedFieldsToAdd > 0 ? [...Array(committedFieldsToAdd)].map((value: number, index: number) => (<Field id={index + 1} key={index} />)):
            <IonLabel color="danger">Number of Cashiers must be positive</IonLabel>}
          </IonList>
        </IonContent>
      </IonPage>
    ); 
  };


  const Field = ({ id }: { id: number }) => (
    <div className="slidecontainer">
        <IonItem class='textback1'lines="none" >
        <IonInput class='textfont1' id={`name${id}`} placeholder="Cashier Name" ></IonInput>
        <IonInput class='textfont1' id={`note${id}`} placeholder="Notes" ></IonInput>
        </IonItem>
        <IonItem class='textback1'lines="none" >
        <IonInput class='textfont1' id={`Register${id}`} placeholder="Early Reg #" ></IonInput>
        <IonRange class='textfont1' id={`FCoverage${id}`} dualKnobs={true}  pin={true}  min={700} max={2100} step={25} snaps={true} ticks={true} color="secondary"  />
        </IonItem>
        <IonItem class='textback1'lines="none" >
        <IonInput class='textfont1' id={`Register2${id}`} placeholder="Late Reg #" ></IonInput>
        <IonRange class='textfont1' id={`LCoverage${id}`} dualKnobs={true} pin={true}  min={700} max={2100} step={25} snaps={true} ticks={true} color="secondary" />
        </IonItem>
        <IonItem class='textback1'>
        <IonTextarea class='textfont1' id={`textArea${id}`} placeholder="Complicated Notes" ></IonTextarea>
        </IonItem>
    </div>
    );

export default Tab1;
