import React from 'react';
import { IonContent, IonHeader, IonPage,  IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonButton, IonTextarea} from '@ionic/react';
import './Tab4.css';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';

const Tab4: React.FC = () => {

  const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(1);
  
  function handleDelete(){

  }

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar class='textback4'>
          <IonTitle class='titlefont4'>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='content4' fullscreen>
            {committedFieldsToAdd > 0 ? [...Array(committedFieldsToAdd)].map((value: number, index: number) => (<Field id={index + 1} key={index} />)):
            <IonLabel color="danger">There are currently no Notes</IonLabel>}
      </IonContent>
    </IonPage>
  );
  
};const Field = ({ id }: { id: number }) => (
  <div className="slidecontainer">
    <IonItem class='textback4'lines="none">
      <IonButton color="primary" slot="end">X</IonButton>   
      </IonItem>
      <IonItem class='textback4'lines="none" >
      <IonInput class='textfont4' id={`name${id}`} placeholder="Title" ></IonInput>
      </IonItem>
      <IonItem class='textback4'lines="none" >
      <IonTextarea class='textfont4' id={`textArea${id}`} placeholder="Notes" ></IonTextarea>    
      </IonItem>
      
  </div>
  );


export default Tab4;

