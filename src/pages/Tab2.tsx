import React, { useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonRange, IonButton, IonTextarea, IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {

/*const [Statea, setStatea] = React.useState({
  tixa0:0,
  tixa1:0,
  tixa2:0,
  tixa3:0,
});*/
  
    const [tix0, setTix0] = React.useState(0);
    const [tix1, setTix1] = React.useState(0);
    const [tix2, setTix2] = React.useState(0);
    const [tix3, setTix3] = React.useState(0);
    const [tix4, setTix4] = React.useState(0);
    const [tix5, setTix5] = React.useState(0);
    const [tix6, setTix6] = React.useState(0);
    const [tix7, setTix7] = React.useState(0);
    const [tix8, setTix8] = React.useState(0);
    const [tix9, setTix9] = React.useState(0);
    const [tix10, setTix10] = React.useState(0);
    const [tix11, setTix11] = React.useState(0);
    const [tix12, setTix12] = React.useState(0);
    const [tix13, setTix13] = React.useState(0);
    const [tix14, setTix14] = React.useState(0);
    const [tix15, setTix15] = React.useState(0);

    const [multi0, setMulti0] = React.useState(0);
    const [multi1, setMulti1] = React.useState(0);
    const [multi2, setMulti2] = React.useState(0);
    const [multi3, setMulti3] = React.useState(0);
    const [multi4, setMulti4] = React.useState(0);
    const [multi5, setMulti5] = React.useState(0);
    const [multi6, setMulti6] = React.useState(0);
    const [multi7, setMulti7] = React.useState(0);
    const [multi8, setMulti8] = React.useState(0);
    const [multi9, setMulti9] = React.useState(0);
    const [multi10, setMulti10] = React.useState(0);
    const [multi11, setMulti11] = React.useState(0);
    const [multi12, setMulti12] = React.useState(0);
    const [multi13, setMulti13] = React.useState(0);
    const [multi14, setMulti14] = React.useState(0);
    const [multi15, setMulti15] = React.useState(0);

    const [Uc0, setUc0] = React.useState(0);
    const [Uc1, setUc1] = React.useState(0);
    const [Uc2, setUc2] = React.useState(0);
    const [Uc3, setUc3] = React.useState(0);

    var TTotal = 0;

  let Tix = [tix0, tix1, tix2, tix3, tix4, tix5, tix6, tix7, tix8, tix9, tix10, tix11, tix12, tix13, tix14, tix15]
  let Multi = [multi0, multi1, multi2, multi3, multi4, multi5, multi6, multi7, multi8, multi9, multi10, multi11, multi12, multi13, multi14, multi15]
  let Count = [Uc0, Uc1, Uc2, Uc3]
  
  const [State, SetState] = React.useState(0);
  const [TAState] = React.useState(Tix);
  const [MAState] = React.useState(Multi);
  const [UCState] = React.useState(Count);

  let Val = [
    tix0*multi0, tix1*multi1, tix2*multi2, tix3*multi3,
    tix4*multi4, tix5*multi5, tix6*multi6, tix7*multi7,
    tix8*multi8, tix9*multi9, tix10*multi10, tix11*multi11,
    tix12*multi12, tix13*multi13, tix14*multi14, tix15*multi15,
  ]

  function uTix (id: number, e:any){
    
    TAState[id] = e;  

    eval('setTix'+ id)(e);
  }

  function uMulti (id: number, e:any){
    MAState[id] = e; 

    eval('setMulti'+ id)(e);
  }

  function uCount (id: number, e:any){
    UCState[id] = e;
    eval('setUc'+ id)(e); 
  }

  function saveLocalStorage () {
    //var test = tix0;
    var new_data1 = TAState;
    var new_data2 = MAState;
    var new_data3 = UCState;

    if(localStorage.getItem('Tix') == null || localStorage.getItem('Multi') == null || localStorage.getItem('Count') == null) {
      localStorage.setItem('Tix', '[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]');
      localStorage.setItem('Multi', '[1, 2, 2, 3, 5, 5, 5, 5, 10, 10, 10, 10, 20, 30, 30, 30]');
      localStorage.setItem('Count', '[0, 0, 0, 0, 0]');
      //localStorage.setItem('test', '0');
    }
    
    localStorage.setItem('Tix', JSON.stringify(new_data1));
    localStorage.setItem('Multi', JSON.stringify(new_data2));
    localStorage.setItem('Count', JSON.stringify(new_data3));
    //localStorage.setItem('test', JSON.stringify(test));
  }

  function loadLocalStorage () {
    if(localStorage.getItem('Tix') !== null && localStorage.getItem('Multi') !== null && localStorage.getItem('Count') !== null) {
      var arr1 = JSON.parse(localStorage.getItem('Tix')|| '{}') ;
      var arr2 = JSON.parse(localStorage.getItem('Multi')|| '{}');
      var arr3 = JSON.parse(localStorage.getItem('Count')|| '{}');
      //var test1 = JSON.parse(localStorage.getItem('test')|| '{}');
      console.log(arr1);
      console.log(arr2);
      console.log(arr3);
      

      //setTix0(test1);

      arr1.map((value:number, index: number) => {
        eval('setTix' + index)(value);
      });
      arr2.map((value:number, index: number) => {
        eval('setMulti' + index)(value);
      });
      arr3.map((value:number, index: number) => {
        eval('setUc' + index)(value);
      });
  }
}


  

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar class='textback2'>
          <IonTitle class='titlefont2'>Lottery Balance Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItemDivider>
      <IonButton color="primary" onClick={()=>saveLocalStorage()}>Save</IonButton>
      <IonButton color="primary" onClick={()=>loadLocalStorage()}>Load</IonButton>
      </IonItemDivider>
      <IonContent class='content2' fullscreen>
        <IonGrid >
        <IonRow >
            <IonCol class='col'># Tickets</IonCol>
            <IonCol class='col'>$ Value</IonCol>
            <IonCol class='col'>Totals</IonCol>
          </IonRow>
          <IonRow >
            <IonCol class='col'><IonInput value = {tix0} class='input2' type="number" placeholder="#Tickets"  onIonChange={e => uTix(0, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi0} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(0, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{tix0*multi0}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix1} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(1, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi1} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(1, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[1]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix2} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(2, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi2} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(2, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[2]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix3} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(3, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi3} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(3, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[3]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix4} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(4, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi4} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(4, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[4]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix5} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(5, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi5} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(5, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[5]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix6} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(6, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi6} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(6, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[6]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix7} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(7, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi7} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(7, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[7]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix8} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(8, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi8} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(8, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[8]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix9} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(9, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi9} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(9, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[9]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix10} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(10, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi10} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(10, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[10]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix11} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(11, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi11} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(11, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[11]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix12} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(12, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi12} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(12, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[12]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix13} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(13, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi13} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(13, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[13]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix14} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(14, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi14} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(14, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[14]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol class='col'><IonInput value = {tix15} id ='intix1' class='input2' type="number" placeholder="#Tickets" onIonChange={(e) => uTix(15, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
            <IonCol class='col'><IonInput value = {multi15} class='input2' type="number" placeholder="Value" onIonChange={(e) => uMulti(15, parseInt(e.detail.value!, 10))}></IonInput></IonCol>
            <IonCol class='col'>{Val[15]}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol class='col'>Total = ${Val.reduce((a, b) => a+b)} </IonCol>
          </IonRow>
          
        <IonRow>
        <IonCol class='col'>Total Tickets: </IonCol>
          <IonCol class='col'>${TTotal = Val.reduce((a, b) => a+b)}</IonCol>
          <IonCol></IonCol>
          </IonRow>
        <IonRow>
        <IonCol class='col'>Total Cash: </IonCol>
           <IonCol class='col'><IonInput value = {Uc0} class='input2' type="number" placeholder="Cash in drawer" onIonChange={(e) => uCount(0, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
           <IonCol ></IonCol>
           </IonRow>
        <IonRow>
        <IonCol class='col'>Online Sales: </IonCol>
           <IonCol class='col'><IonInput value = {Uc1} class='input2' type="number" color="danger" placeholder="Sales -" onIonChange={(e) => uCount(1, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
           <IonCol ></IonCol>
           </IonRow>
        <IonRow>
        <IonCol class='col'>Online Cashes:</IonCol>
           <IonCol class='col'><IonInput value = {Uc2} class='input2' type="number" placeholder="Sales +" onIonChange={(e) => uCount(2, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
           <IonCol class='col'> S-C = {Uc1-Uc2}</IonCol>
           </IonRow>
        <IonRow>
        <IonCol class='col'>Instant Cashes:</IonCol>
           <IonCol class='col'><IonInput value = {Uc3} class='input2' type="number" placeholder="Wins" onIonChange={(e) => uCount(3, parseInt(e.detail.value!, 10)) } ></IonInput></IonCol>
           <IonCol ></IonCol>
           </IonRow>
        <IonRow>
        <IonCol class='col'>Grand Total: </IonCol>
          <IonCol class='col'>${TTotal+Uc0-Uc1+Uc2+Uc3}</IonCol>
          <IonCol ></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
  
};


export default Tab2;


