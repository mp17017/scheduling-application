import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonCheckbox, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea, IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
 
  const checkboxListWeekDay = [
    { val: 'Setup Paper-Trail Envelope', isChecked: false },
    { val: 'Count Safe', isChecked: false },
    { val: 'Accept New Money', isChecked: false },
    { val: 'Accept New Lottery', isChecked: false },
    { val: 'Setup 157-1', isChecked: false },
    { val: 'Over Limit Report', isChecked: false },
    { val: 'Setup Paper Till List', isChecked: false },
    { val: 'Count/Setup Three Tills', isChecked: false },
    { val: 'Count 157-1 / Setup 157-2', isChecked: false },
    { val: 'Count/Setup Three Tills', isChecked: false },
    { val: 'Count 157-2 / Setup 157-3', isChecked: false },
    { val: 'Do pickups for 138, 140, and remaining tills', isChecked: false },
    { val: 'Count 157-3', isChecked: false },
    { val: 'Setup Deposit bags', isChecked: false },
    { val: 'Check SSCC for full bag', isChecked: false },
    { val: 'Count/Setup Tills as possible', isChecked: false },
    { val: 'Perform MLP for 138/140', isChecked: false },
    { val: 'Setup Cash Deposit', isChecked: false },
    { val: 'Put Tidel in SSCC', isChecked: false },
    { val: 'Balance Safe + Deposit + Coins', isChecked: false },
    { val: 'Finish Deposits', isChecked: false },
    { val: 'Perform Locking Run', isChecked: false },
    { val: 'WU, MO, & SSCC reports', isChecked: false },
    { val: 'Print TFCA & Final balance', isChecked: false },
    { val: 'Declare Safe/Safe Locking', isChecked: false },
    { val: 'Print TFCA, Over/Short, Deposits', isChecked: false },
    { val: 'Store paper-trail envelope', isChecked: false }
  ];

  const checkboxListSaturdayDay = [
    { val: 'Collect ', isChecked: false },
    { val: 'Setup Paper-Trail Envelope', isChecked: false },
    { val: 'Count Safe', isChecked: false },
    { val: 'Accept New Money', isChecked: false },
    { val: 'Accept New Lottery', isChecked: false },
    { val: 'Setup 157-1', isChecked: false },
    { val: 'Over Limit Report', isChecked: false },
    { val: 'Setup Paper Till List', isChecked: false },
    { val: 'Count/Setup Three Tills', isChecked: false },
    { val: 'Count 157-1 / Setup 157-2', isChecked: false },
    { val: 'Count/Setup Three Tills', isChecked: false },
    { val: 'Count 157-2 / Setup 157-3', isChecked: false },
    { val: 'Do pickups for 138, 140, and remaining tills', isChecked: false },
    { val: 'Count 157-3', isChecked: false },
    { val: 'Setup Deposit bags', isChecked: false },
    { val: 'Check SSCC for full bag', isChecked: false },
    { val: 'Count/Setup Tills as possible', isChecked: false },
    { val: 'Perform MLP for 138/140', isChecked: false },
    { val: 'Setup Cash Deposit', isChecked: false },
    { val: 'Put Tidel in SSCC', isChecked: false },
    { val: 'Balance Safe + Deposit + Coins', isChecked: false },
    { val: 'Finish Deposits', isChecked: false },
    { val: 'Perform Locking Run', isChecked: false },
    { val: 'WU, MO, & SSCC reports', isChecked: false },
    { val: 'Print TFCA & Final balance', isChecked: false },
    { val: 'Declare Safe/Safe Locking', isChecked: false },
    { val: 'Print TFCA, Over/Short, Deposits', isChecked: false },
    { val: 'Store paper-trail envelope', isChecked: false }
  ];

  var Day = new Date().getDay();
  
  const DoW = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
  ]
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Closer Tasks for {DoW[Day]}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {Day !== 6 ? checkboxListWeekDay.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>
        )): 
        checkboxListSaturdayDay.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>))}
      </IonContent>
    </IonPage>
  );
  
};



export default Tab3;
