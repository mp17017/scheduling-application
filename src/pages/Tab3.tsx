import React from 'react';
import { IonContent, IonHeader, IonPage,  IonTitle, IonLabel, IonToolbar, IonInput, IonCheckbox, IonItem, IonButton, IonTextarea, IonGrid, IonRow, IonCol, IonModal, IonItemGroup, IonItemDivider, IonSegment} from '@ionic/react';
import './Tab3.css';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';

const Tab3: React.FC = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [count, setCount] = React.useState(0);
 
  const checkboxListWeekDay = [
    { val: 'Setup Paper-Trail Envelope', isChecked: false, },
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
    { val: 'Preliminary Safe Balance', isChecked: false },
    { val: 'Finish Deposits', isChecked: false },
    { val: 'WU, MO, & SSCC reports', isChecked: false },
    { val: 'Perform Locking Run', isChecked: false },
    { val: 'Print TFCA & Final balance', isChecked: false },
    { val: 'Declare Safe/Safe Locking', isChecked: false },
    { val: 'Print TFCA, Over/Short, Deposits', isChecked: false },
    { val: 'Store paper-trail envelope', isChecked: false }
  ];

  const checkboxListSaturday = [
    { val: 'Collect DSD Paperwork', isChecked: false},
    { val: 'Setup Paper-Trail Envelope', isChecked: false},
    { val: 'Count Safe', isChecked: false},
    { val: 'Accept New Money', isChecked: false},
    { val: 'Accept New Lottery', isChecked: false},
    { val: 'Replace Weekly Paperwork', isChecked: false},
    { val: 'Verify Tax Exempt', isChecked: false},
    { val: 'Setup 157-1', isChecked: false},
    { val: 'Over Limit Report', isChecked: false},
    { val: 'Setup Paper Till List', isChecked: false},
    
    { val: 'Count/Setup Three Tills', isChecked: false},
    { val: 'Count 157-1 / Setup 157-2', isChecked: false},
    { val: 'Count/Setup Three Tills', isChecked: false},
    { val: 'Count 157-2 / Setup 157-3', isChecked: false},
    { val: 'Do pickups for 138, 140, and remaining tills', isChecked: false},
    { val: 'Count 157-3', isChecked: false},
    { val: 'Setup Deposit bags', isChecked: false},
    { val: 'Check SSCC for full bag', isChecked: false},
    { val: 'Count/Setup Tills as possible', isChecked: false},

    { val: 'Perform MLP for 138/140', isChecked: false},
    { val: 'Setup Cash Deposit', isChecked: false},
    { val: 'Count Tidel', isChecked: false },
    { val: 'Preliminary Safe Balance', isChecked: false},
    { val: 'Finish Deposits', isChecked: false},
    { val: 'Weekly WU, MO, & SSCC reports', isChecked: false},
    { val: 'Perform Locking Run', isChecked: false},
    { val: 'Weekly Voucher Report', isChecked: false},
    { val: 'Vendor Coupons', isChecked: false},
    { val: 'Print TFCA & Final balance', isChecked: false},
    { val: 'Declare & Lock Safe', isChecked: false},
    { val: 'Print TFCA, Over/Short, Deposits', isChecked: false},
    { val: 'Make Copies', isChecked: false},
    { val: 'Store paper-trail envelope', isChecked: false},
    { val: 'Weekly Paper-Trail evenlope', isChecked: false},
    { val: 'Check and Store Mail Bags', isChecked: false}
  ];

  const MessageListSaturday = [

//DSD Paperwork
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Collecting DSD Paperwork</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>DSD paperwork will be located at the front desk usually, however, you may need to contact grocery to get it.<br /> <br /> 
The top sheet goes into the pink bag, the rest goes into the purple bag.</p>
</IonItem>
</IonItemGroup>,

//PaperTrail
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Paper Trail Setup</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Grab a standard white envelope from the drawer, write todays date, the day, (friday for example) and your initials.<br /><br />
Throughout the night, make sure you place your paperwork into this retention envelope to be stored when you're done.</p>
</IonItem>
</IonItemGroup>,

//Count the Safe
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting the Safe</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>First, add all of the cash from the drop safe sheet, Hit subtotal. <br /><br />
Count all change in the safe, hit subtotal. Count all bills in the safe, Total. <br /><br />
Second, count all stamps including those in the drop safe, one band is $275, one brick is $1100, Total. <br /><br />
Finally, count all lottery, One wrap is $300.</p>
</IonItem>
</IonItemGroup>,

//Accept new Money
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Accepting New Money</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
  
<p>To accept new money, first you need to count all of the money you are recieving in the bag, be sure to use the calculator as you go. <br /> <br />
After you've verified the money in the bag, make straps of 50 bills, examples: $50 in ones, $250 in fives $500 in tens <br/> <br/>
On the computer, go to bank receipt, type in the correct amount and hit ok. <br/><br/>
Your done!</p>
</IonItem>
</IonItemGroup>,

//Accept new Lotto
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Accepting New Lottery</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Check for an orange slept stapled to the lottery invoice, if not present, ask your manager. <br/><br/>
Count each wrap as $300, keep in mind the invoice will list them at a lower value. <br/><br/>
Once you have added up all of the new wraps on the calculator login to the office and open bank reciept. <br/><br/>
Click the corporate office tab and enter the ammount in the lottery row. <br/><br/>
Your done!</p>
</IonItem>
</IonItemGroup>,

//Weekly Paperwork
<IonItemGroup>
<IonItemDivider class = 'textback3'>
<IonTitle class='titlefont3'>Replace Weekly Paperwork</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Replace the following items in the cash office binder with new folders and new pages:<br/><br/>
1- <br/><br/>
2- Am and Pm safe balance sheets. <br/><br/>
3- Cash Office loans for the week. <br/><br/>
4- Money Order Folder. <br/><br/>
5- SSCC Folder. <br/><br/>
6- Voucher Folder. <br/><br/>
7- Western Union folder from the shelf. <br/><br/>
Fill out the week box on each folder and stamp them.
</p>
</IonItem>
</IonItemGroup>,

//Tax Exempt
<IonItemGroup>
<IonItemDivider class = 'textback3'>
<IonTitle class='titlefont3'>Verify Tax Exempt</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Counting tax exempt is a time consuming task, it's important to take care of it early, and maintain it throughout the night as new entries are added.<br/>
1- On the computer, open the electronic journal.<br/>
2- Select the top 7 items on the list, these are the past 7 days of items.<br/>
3- Press Select.<br/>
4- Select item number 15 type and hit ok.<br/>
5- Select item number 15 again tax exempt and hit ok.<br/>
6- Click the date button at the top of the list to sort all of the entries by date.<br/>
7- Click print list to print out all the entries.<br/>
8- On the back of the page that prints write down the number of tickets and the total cash amount.<br/><br/>

At this point, you will only be using the computer to look up missing tickets, make sure to stop and move the mouse so it doesn't lock, this is to save you time.<br/><br/>

9- Get the shipt tax exempt and the black tax exempt binder if you haven't already.<br/>
10- Remove all pages from the shipt binder that have no empty spots for entry.<br/>
11- Using the calculator, add up the cash amounts for each page individually and staple them to the page.<br/>
12- Go ahead and write the date and stamp each page as you work.<br/>
13- Repeat steps 11 and 12 for pages in the black tax exempt folder.<br/>
14- Add the totals of each page including any partial pages together. <br/>
15- Verify that the new total matches the total you wrote on the printed page. <br/><br/>

If the totals do not match:<br/>
1- Subtract the calculated total from the total on the page. <br/>
2- Check if any of the tickets in the list match that total exactly, if it does, find it on the computer and print it. <br/>
3- Verify that the payment method matches either shipt or tax exempt, if you cannot verify it, contact a manager or set it aside. <br/><br/>

If the totals are wildly different:<br/>
1- Double check your math on each page by going down the list one page at a time, verifying every single entry.<br/>
2- If any entries do not match perfectly, but are 'very' similar, you may change them to match after verifying that they don't exist elsewhere.<br/>
3- For all missing entries, find and print the reciept on the computer.<br/>
4- For missing entries, if you can verify that they belong in the shipt log, or the black binder, add them, otherwise contact a manager and/or set them aside.<br/>
5- Continue working on this until the totals match.<br/><br/>

If the totals 'never' match:<br/>
Well bugger, this is really bad. You've double checked the entries, printed missing receipts, and fixed all mistakes you could find.<br/>
At this point you've done everything you can. leave a note for the opening customer service manager, and continue with the next task.<br/>
Try not to get stuck on this, these things can happen.
</p>
</IonItem>
</IonItemGroup>,

//157 Setup one
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>157 Initial Setup</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>First, make sure that the scratch pad on the computer is empty, if it has any amount in it, clear it by entering the amount shown <br/><br/>
Grab one tray each of quarters, dimes, nickles, and pennies, Set them aside inside the safe if they fit, or on the counter if they don't <br/><br/>
Grab three straps of ones, one strap of fives, and one strap of tens, and set them aside as well <br/><br/> 
Type 157.1 and hit ref on the calculator then type $1075, the total value of the set aside currency. <br/><br/>
Loan $1075 to 157 on the computer, then pick up the same amount. $1075 will be in the scratch pad. <br/><br/>
While counting, do not add to, subtract from, or lose any of the set aside currency for 157, you will need to count any left over later</p>
</IonItem>
</IonItemGroup>,

//Overlimit
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Viewing Over Limit Report</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>The Over limit report shows the amount of money in each till, this will help you decide what to pick up first. <br/><br/>
Any line till over $600 can be consider 'fat' and should be picked up sooner rather than later. <br/><br/>
Front Service tills should be picked up as soon as possible as they typically contain $2000 or more. <br/><br/>
On the Paper Till List, mark fat tills with an F for your reference.</p>
</IonItem>
</IonItemGroup>,

//Paper Till Setup
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Paper Till List Setup</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>This is simply a list of tills to keep you on track for the evening and to communicate to the front end what tills they can use. <br/><br/>
On a sticky-note, make a list from 1 to 8, then 151, and 152. These are the tills available. <br/><br/>
Take a moment to view the schedule and mark any tills that will be in use after 7pm with the time the cashier leaves that till. <br/><br/>
Finally, it's good practice to note down your paper work tasks, such as Western Union, SSCC, and Money Orders.</p>
</IonItem>
</IonItemGroup>,

//Till Counting
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting Tills</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
5- After the counter finishes, add the total on the calculator. <br/>
6- Add coin rolls in the till to the calculator. <br/>
7- Add coins together one type at a time (Ex: Quarters). <br/>
8- Subtotal then subtract the cash amount from the till report <br/>
9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
10- Count and Add stamps, hit enter <br/>
11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
Front Desk tills also get an extra roll of quarters, dimes, and nickles.
12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p> 
</IonItem>
</IonItemGroup>,

//157.1 to 157.2
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting and setting up 157.1/157.2</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>1- On the calculator type 157.1 and hit ref. <br/>
2- Add all of the cash in the scratch drawer on the calculator one type at a time (Ex: 20s) <br/>
3- Add all of the cash you've set aside (Ex: Coin trays, bill straps, etc.) <br/>
4- Add each till you've set up (Ex: $368 for lines, $1935 for front end) <br/>
5- Set aside large bills with a paperclip you will be removing them from your next scratch pad. <br/>
6- Strap any sets of 50 bills you find (Ex: $1000 in 20s)<br/>
7- Subtotal the amount and click scratch pad on the computer, subtract the amount displayed on the cash line, this should be zero. <br/>
8- Zero out the scratch pad, staple the 157 references to the printed sheet. <br/>
9- Before tucking it away, enter 157.2 and hit ref on the calculator, add the last subtotal before you included the tills, subtract big bills and straps of 20s. This is your new scratch pad. <br/>
10- Tri-Fold the scratch pad paperwork and put your till counts in it, neatly slide it into your Envelope.</p>
</IonItem>
</IonItemGroup>,

//Counting tills
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting Tills</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
5- After the counter finishes, add the total on the calculator. <br/>
6- Add coin rolls in the till to the calculator. <br/>
7- Add coins together one type at a time (Ex: Quarters). <br/>
8- Subtotal then subtract the cash amount from the till report <br/>
9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
10- Count and Add stamps, hit enter <br/>
11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
Front Desk tills also get an extra roll of quarters, dimes, and nickles.
12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p> 
</IonItem>
</IonItemGroup>,

//157.2 to 157.3
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting and setting up 157.2/157.3</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>1- On the calculator type 157.2 and hit ref. <br/>
2- Add all of the cash in the scratch drawer on the calculator one type at a time (Ex: 20s) <br/>
3- Add all of the cash you've set aside (Ex: Coin trays, bill straps, etc.) <br/>
4- Add each till you've set up (Ex: $368 for lines, $1935 for front end) <br/>
5- Set aside large bills with a paperclip you will be removing them from your next scratch pad. <br/>
6- Strap any sets of 50 bills you find (Ex: $1000 in 20s)<br/>
7- Subtotal the amount and click scratch pad on the computer, subtract the amount displayed on the cash line, this should be zero. <br/>
8- Zero out the scratch pad, staple the 157 references to the printed sheet. <br/>
9- Before tucking it away, enter 157.3 and hit ref on the calculator, add the last subtotal before you included the tills, subtract big bills and straps of 20s. This is your new scratch pad. <br/>
10- Tri-Fold the scratch pad paperwork and put your till counts in it, neatly slide it into your Envelope.</p>
</IonItem>
</IonItemGroup>,

//Performing Pickups
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Performing Pickups</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Before you exit the office, grab a spare blue bag from the shelf to collect 138. <br/>
1- Grab 138 keys, go to the ITVM (138) use the large key to open the front panel, then the smaller key to access the cash box, collect all cash inside placing it in the blue bag then close both.<br/>
2- For 140, take only big bills, coupons, and 20s to get the till close to $200. Write down the amount you take on the lottery sheet for your front end. <br/>
3- While there are no customers at active tills, have the cashier unlock their till so you can perform a pickup. <br/>
4- Print a till report and place it inside the coupon bag. <br/>
5- Take all checks and large bills, then take any 20s in excess of $100. If they have an exceptionally large amount of other bills, consider taking some of those as well. Place all currency in the blue bag. <br/>
6- Repeat steps 2 through 4 for all other active tills. <br/><br/>
Once in the back office you can begin counting the pick ups one at a time, as you're not setting up any tills this is a quick process. <br/><br/>
1- Using the till report, type the till # into the calculator and hit ref.<br/>
2- Put all bills into the counter and hit cont while it is in mix mode. Add the total to the calculator.<br/>
3- Subtotal the amount and subtract the cash from the till report. <br/>
4- Add checks, subtotal, then subtract checks from the till report. <br/>
5- Repeat steps 1 through 4 for the remaining pickups.<br/>
6- Pickup each amount from the office on the computer.</p>
</IonItem>
</IonItemGroup>,

//157.3
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Count 157.3</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Because you only performed pickups on this run, you do not need to physically count your scratch drawer as you only added currency to it.<br/><br/>
Simply add up the amounts you collected from each pickup as well as the amount you loaned and picked up from 157. Subtotal and subtract from the scratch pad amount, it will be zero.</p>
</IonItem>
</IonItemGroup>,

//Deposits
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Setting up Deposits</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>1- Collect a clear check bag, white cash bag, the deposit log from the safe, a deposit slip booklet from the drawer, and a pen.<br/>
2- On the safe deposit log, add the date on two new lines, then noting previous entries note down the information for cash and checks. <br/>
3- On the cash line write down the deposit bag number on the white bag. Do the same for the check line and the clear bag.<br/>
4- On each bag, the reciever is USB, sender is your store number, also write the current date, and your name.<br/>
5- On the deposit slip write the date at the top, your name at the bottom, and the deposit bag number.<br/><br/>
Its best to perform deposits at the end of the night, ensuring no one bag is over $6000, you can technically complete a deposit now if you want, see finishing deposits if you would like to do that now.</p>
</IonItem>
</IonItemGroup>,

//SSCC Bags
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Check SSCC for full bags</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Simply head outside and check if the red SSCC light is flashing, if it is, get the key from the front desk, open up the SSCC, remove the full bag, seal it, replace it, and take the full bag to the office.<br/><br/>
SSCC Deposit:<br/>
1- Place the SSCC coin bag on the counter.<br/>
2- Fill out the information on the SSCC bag including your name, the amount, and the date.<br/>
3- Get a deposit slip from the drawer and fill it out with the amount from the bag, the date, your name, and the bag number.<br/>
4- Grab an adhesive clear slip bag from the shelf.<br/>
5- Carefully put the clear slip bag on the back of the coin bag.<br/>
6- Verify the information on white slip is correct then tear it and the yellow slip away.<br/>
7- Place the white slip into the pouch on the back and seal it.<br/>
8- Tear away the top slip and staple it to the yellow slip.<br/>
9- On the computer, open the deposit menu, and enter the information into the SSCC line.<br/>
10- Write the cash amount and bag number on the Brinks Deposit Sheet on a new SSCC line.<br/>
10- Place the slip in the deposit slip retention bin.
</p>
</IonItem>
</IonItemGroup>,

//Counting Tills
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting and Setting up tills</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
5- After the counter finishes, add the total on the calculator. <br/>
6- Add coin rolls in the till to the calculator. <br/>
7- Add coins together one type at a time (Ex: Quarters). <br/>
8- Subtotal then subtract the cash amount from the till report <br/>
9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
10- Count and Add stamps, hit enter <br/>
11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
Front Desk tills also get an extra roll of quarters, dimes, and nickles.
12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p>
</IonItem>
</IonItemGroup>,

// MLP for 138 and 140
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Perform MLP for 138 and 140</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>
  After you have counted 138 and 140 you need to perform an operation called MLP which works like so:<br/>
  1- Click miscelanious reciept on the computer.<br/>
  2- Click the top row for lottery.<br/>
  3- Enter the third amount from your till count for 138 which is negative cashes + positive cashes.<br/>
  4- Hit apply and do the same using the number from 140.<br/>
  5- Loan that same amount to 138 and 140 respectively.<br/>
  6- Perform normal pickups making sure to skip the amount you previously did misc receipt for and loaned.
</p>
</IonItem>
</IonItemGroup>,

//Cash Deposit
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Setup Cash Deposit</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>
  Cash deposits must not be done until 'all' tills have been counted, once you've made sure all tills are counted do the following:<br/>
  1- Count all big bills (50's and 100's) one type at a time, then add the totals together and rubberband the bills together.<br/>
  2- Get a cash band, if the total does not match the band, write the total on the white side, adding it again.<br/><br/>

  Looks something like this:<br/>
  50 - 1000<br/>
  100 - 1500<br/>
  ----------<br/>
  2500<br/><br/>

  3- Set the bills aside, do the same for 20's and strap them by the thousands.<br/>
  4- With leftover 20's add them on a new line, then add 10's 5's 2's and 1's respectively.<br/>
  5- Rubberband and write out a cash band for them as above.<br/>
  6- If there are any odd coins such as $1 or $0.50 pieces, put them in a pouch and write the amount on the pouch.<br/>
  7- Add the totals of all cash bands together on the calculator and set all bills aside until you do your preliminary count.<br/>
</p>
</IonItem>
</IonItemGroup>,

//Tidel
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Counting Tidel Coins</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Because Saturday night represents an end of the week, it is best to either include Tidel coins with your deposit, or leave them in 157 in the safe.<br/>
Remember to include tidel on the PM safe balancing sheet if you add them to your deposit.<br/>
Additionally, remember to include tidel in your final count if you do not deposit them.
</p>
</IonItem>
</IonItemGroup>,

//Preliminary Safe Balance.
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Balancing the Safe</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Once you have counted all of the tills, you can balance the safe, its best to do this before you deposit to ensure accuracy.<br/><br/>
1- Count up your cash for your deposit (See finish Deposits).<br/>
2- Take your left-over loose coin and run them through SSCC if you haven't already using the manual inside the SSCC door, (Or count them by hand). <br/>
3- Using the Cash Office PM Sheet, Add up all cash for the appropriate lines, because its saturday, leave strapped cash out of your drop. You should add $200, $1935, $1935, $3312, Cash Straps, Coins in safe, Cash in drop.<br/>
4- Subtotal the above, now add your cash deposit as well as your loose coin count and hit subtotal <br/>
5- Preview but do not print a TFCA, subtract the cash total. It should be zero <br/>
6- If the total is 'not' zero, it means you've made a mistake earlier in the evening, if its under $10 move on, if its over $10 take a deep breath and try to find it. Make a note if you can't.<br/><br/>

Common Errors include:<br/>
1- Too many bills in a till. (Will be under a very specific amount, like $20)<br/>
2- Not enough bills in a till. (Will be over a very specific amount, like $20)<br/>
3- Miscounted the deposit.<br/>
4- Miscounted the drop safe.<br/>
5- Miscounted change in safe.<br/>
6- Miscounted a tills pickup. (Cannot be found/fixed on your own)</p>
</IonItem>
</IonItemGroup>,

//Finishing Deposits
<IonItemGroup>
<IonItemDivider class = 'textback3'>
<IonTitle class='titlefont3'>Finishing Deposits</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Once you are satisfied with your prilimenary balance, you can perform your final balance.<br/><br/>
Checks:<br/>
1- On the computer, open the deposit menu.<br/>
2- The new menu will show you the amount of checks you should have, verify that the amount is correct, then write these down in the 'number of items' box on the deposit slip.<br/>
3- Verify that the cash value of the checks is correct then write it down in the 'checks amount', 'total' and the sideways total boxes.<br/>
4- Verify that the date, your name, and the correct bag number are on the deposit slip, then tear away both the white and yellow slips.<br/>
5- Place the white slip in the back of the deposit bag.<br/>
6- Write the cash amount of the checks on the front of the clear deposit bag at both the top, and center areas.<br/>
7- Place 'all' checks in the bag ensuring each as been store stamped.<br/>
8- Seal the front and back of the bag and tear away the top.<br/>
9- Staple the plastic top of the bag to the yellow slip neatly.<br/>
10- In the deposit screen on the computer, enter the information from the yellow slip into the check line and hit apply.<br/>
11- Write the cash amount and bag number on the Brinks Deposit Sheet on a new check line.<br/>
12- Place the slip in the deposit slip retention bin.<br/><br/>

Cash:<br/>
1- Earlier you already made cash bands and added them together, write this amount on the white deposit bag.<br/>
2- On the deposit slip write the cash amount of each 'type' of currency down one by one.<br/>
3- Write the total in the total box in the middle, bottom, and the individual boxes along the side.<br/>
4- Verify that the date, your name, and the bag number are correct then tear away the white and yellow slips.<br/>
5- Write the cash total on the bag in the middle and top areas of the bag.<br/>
6- Place the white slip into the pouch on the back.<br/>
7- Place all cash into the main pouch and seal the bag.<br/>
8- Tear away the top strip and staple it to the yellow slip.<br/>
9- On the computer, enter the information into the cash deposit line in the deposit window.<br/>
10- Write the cash amount and bag number on the brinks deposit sheet. <br/>
11- Place the slip in the deposit slip retention bin.
</p>
</IonItem>
</IonItemGroup>,

//Reports
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>WU, MO, and SSCC Reports</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>After the store closes you can verify these reports, do not verify these reports before the store closes.<br/>
1- At store close, you can collect all of the reports at once.<br/>
2- The Western Union report can be found under other/transaction log on the western union page.<br/>
3- Money orders are printed at money order terminal, to do this press reports/view/close/yes/yes.<br/>
4- After Money orders are printed, ensure that you hit no on the terminal to clear the day.<br/>
5- For SSCC you need the SSCC keys from the front desk.<br/>
6- At the SSCC machine, open the top panel using the key and hold the enter key until the screen changes.<br/>
7- Press 'day' then 'print'.<br/>
8- Press 'bag' then 'print' twice.<br/>
9- Hold enter to reset the screen and close the panel.<br/>
10- Back in the office, open the 'daily sales report' and view the last page.<br/><br/>

Western Union:<br/>
1- Verify that the amount for sends matches the amount on the daily sales report.<br/>
2- Write the number of sends and the cash amount on the Western Union folder, ensure you are writing on the correct day.<br/>
3- Initial the back in the correct day box.<br/>
4- 'paper clip' the western union paperwork together, this includes all sends and recieves.<br/>
WARNING: Never staple western union paperwork.<br/><br/>

Money Orders:<br/>
1- In the cash office binder, flip over to the money orders folder.<br/>
2- Verify that the total amount from the Money Order report matches the amount for that day on the daily sales report.<br/>
3- Write the amount of both on the folder in their respective slots, subtract them from eachother.<br/>
4- Initial the back of the folder.<br/>
5- Place the Money Order report in the folder.<br/><br/>

SSCC:<br/>
Note: Before you head to the back, you need to cash out the service fee.<br/> 
1- At a front office till, go into special services.<br/>
2- Tap 'SSCC Service Fee'.<br/>
3- Enter the service fee from the day total.<br/>
4- Press tender/Other Tenders/SSCC Service Fee.<br/>
5- You may discard the reciept that prints.<br/>
6- Back in the office, in the cash office binder, flip to the SSCC folder.<br/>
7- Verify the amounts for the cash total and service fee match the report.<br/>
8- Write the amounts for the total and service fee from both the computer and report on the folder<br/>
9- Place one of the two bag total reciepts into the magnetic shelf clip.<br/>
10- Staple the rest of the SSCC paperwork together, including batches from 151/152.<br/>
11- Place paperwork into the folder.
</p>
</IonItem>
</IonItemGroup>,

//Locking Tills
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Lock Tills</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Once all tills have been picked up and built, you can perform locking.<br/>
1- Check for 'unrecalled saved orders' print them out.<br/>
2- 'Remote log off' all cashiers if any are still logged in, including yourself.<br/>
3- Click 'lock tills', click all, click ok.
</p>
</IonItem>
</IonItemGroup>,

//Voucher Report
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Checking Vouchers</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>1- On the computer select the voucher report, in the new window select weekly, and click print.<br />
2- Use the printed report to verify that the vouchers inside the tan voucher folder have all been entered correctly.<br />
3- If any are incorrect, you can enter them into the voucher screen now.<br />
4- If any were input incorrectly, you can fix them in the corrections tab of the voucher screen now.<br />
5- Add them up to verify that the totals match using the calculator.<br />
6- Once the totals match, you can put everything including the report into the tan voucher folder.<br />
7- Check off all the lines on the folder, write the date, print your name, and sign.<br />
8- Seal the folder with tape.<br />
9- Set this folder aside to be copied.</p>
</IonItem>
</IonItemGroup>,

//Vendor Coupons
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Vendor Coupons</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>1- Remove the vendor coupon bag from the wall and replace it with a new one so you don't forget.<br />
2- On the computer, open the daily sales window.<br />
3- On the first page, look for a line that reads 'vendor coupons' and write the total on the bag.<br />
4- Ensure that all barcode coupons are in the bag at this point and that you haven't missed any.<br />
5- Fill out the rest of the information on the bag. <br />
6- Tear away the top portion after filling it out and put it with your retention.<br />
7- Seal the bag and put it in the green mail bag.<br /><br />

Note: You do not enter the vendor coupons total anywhere on the computer, its already noted in the daily sales paperwork.</p>
</IonItem>
</IonItemGroup>,

//Final balance
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Final Balance</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>At this point the safe is almost balanced for you already, but there are a few more things to count.<br/><br/>
Cash:<br/>
1- Using the PM safe balancing worksheet, add all tills including 140 together seperating 140, 151, 152, and Line tills.<br/>
2- Add all money from the drop safe worksheet.<br/>
3- Add coins from the safe.<br/>
4- Print a TFCA report.<br/>
5- Subtract the cash line from the TFCA report.<br/>
6- Write the total amount on the PM safe balancing sheet on the proper line.<br/>
Note: If you put TIDEL into SSCC instead of depositing it, you will be off exactly that amount. It will balance during decleration.<br/><br/>

Stamps:<br/>
1- Add any loose stamps you have out and attach the count to the tickets.<br/>
2- Add all bricks in the door.<br/>
3- Add the stamps currently in all tills.<br/>
4- Add stamps in the drop safe.<br/>
5- Write the total on the PM safe balancing sheet on the proper line.<br/>
Note: Stamps should 'never' be off by any amount, if they are off, count again.<br/><br/>

Lotto:<br/>
1- Add the total amount of all lottery bricks in the safe.<br/>
2- Add misc lottery in the safe.<br/>
3- Add lottery collected from 140. <br/>
4- Subtotal the amount.<br/>
5- Add the ticket amount from 138.<br/>
6- Write the total on the PM safe balancing sheet on the proper line.<br/><br/>

Other:<br/>
1- Write the lottery redeemed amount on the PM safe balancing work sheet.<br/>
2- Write Western Union payouts on the PM safe balancing work sheet.<br/>
3- Write the SSCC bag total from the 'new' sheet on the PM safe balancing work sheet.
</p>
</IonItem>
</IonItemGroup>,

//Safe Declaration
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Safe Decleration and Locking</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>To perform safe Decleration enter the amounts from the PM safe balancing work sheet.<br/>
Before you hit apply, write the total at the bottom of the window on the Safe Balancing work sheet.<br/><br/>
After declaring, you can immediately perform a safe lock. The physical safe itself does not need to be locked for this, you aren't going to set off any alarms.<br/>
To safe lock:<br/>
1- Click 'Safe Locking'<br/>
2- Click 'Ok'<br/>
3- If you recieve a warning that you are off hit yes.<br/>
4- Click the check box to select the safe then click ok.
</p>
</IonItem>
</IonItemGroup>,
 
 //Final Reports
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Final Reports</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>The last reports you need to do are a final TFCA, the Over/Short, Deposits, and the Safe Report that already printed.<br/><br/>
Note: Deposits are printed from the accounting activity audit report window.<br/>
1- Hole punch all four reprts.<br/>
2- Place the over-short report in the black over-short report binder.<br/>
3- Place the Safe Report in the white Safe Report binder.<br/>
4- In the georgia check cashing log, flip to the numeric day of the month.<br/>
5- Place, in order, the AM TFCA, the check cashing log, the TFCA, and lastly the bank deposits.</p>
</IonItem>
</IonItemGroup>,

//Making Copies
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Making Copies</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>The items you need to make copies of are the folling:<br />
All tax exempt paperwork<br />
Both sides of the Western Union envelope.<br />
Both sides of the Money Order envelope.<br />
The front of the SSCC envelope.<br />
The front of the Voucher envelope.<br /><br />

Once you've gathered these you can go to the nearest printer with copying capability to begin.<br />
1- Place one item face down on the scanning surface.<br />
2- Press the green play/start button on the printer (May change depending on model).<br />
3- Once copying is down, remove the item from the scanning surface, and set it away from the uncopied items.<br />
4- Repeat steps 1 through 3 until all items are done.<br />
5- Place the original items into the purple mail bag and close it.
</p>
</IonItem>
</IonItemGroup>,

//Storing paper trail
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Storing Paper Trail</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>Ensure that all other paperwork is in your retention envelope.<br/>
Seal the retention envelope and set it aside for weekly retention.<br/><br/>
Note: There should be 'no' paperwork outside of your retention envelope, paperwork may be lost if not inside the envelope.</p>
</IonItem>
</IonItemGroup>,

//Weekly Retention
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Weekly Retention</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>The weekly retention folders are located in the same drawer as the brinks logs and other folders in the very back.<br/>
1- Verify that you've collected all of the items to be stored that are listed on the envelope itself. locate missing items.<br/>
2- Write down the week number and check off items on the front.<br/>
3- Collect the paper trail envelopes from the the drawer for the week, ensure all are neatly sealed.<br/>
4- Any loose paperwork with the envelopes may be placed neatly in the weekly retention envelope.<br/><br/>

There is a specific way paperwork must be placed in the folder to ensure that it is neat and organized.<br/>
1- Place all loose sheet paperwork in first.<br/>
2- Place the daily rentention folders into the envelope long ways. Three will fit in a row.<br/>
3- Place the deposit slips for the week into the envelope where-ever they can fit.<br/>
4- Stand up the envelope and gently press the envelopes into the bottom. Be careful not to tear it.<br/>
5- Use 5 pieces of tap to seal the envelope.<br/><br/>

Storing weekly retention:
1- In the weekly retention envelope drawers, find the slot matching the week number of this envelope.<br/>
2- Remove the weekly retention folder from this slot and re-seal it if it has been opened.<br/>
3- Leave the old folder on the counter and place the new one into the correct slot.</p>
</IonItem>
</IonItemGroup>,

//Checking and storing mail bags.
<IonItemGroup>
<IonItemDivider class = 'textback3'>
  <IonTitle class='titlefont3'>Storing Paper Trail</IonTitle>
</IonItemDivider>
<IonItem class='textfont3' lines="none">
<p>
  1- Verify that the pink mail bag contains the DSD paperwork from earlier, except the front sheet.<br/>
  2- Verify that the purple mail bag contains all of the items you copied, as well as the front page of the DSD paperwork, and any mail items from the mail slot.<br/>
  3- Place the pink and purple bags into the grey bag.<br/>
  4- Place the grey bag into the green bag.<br/>
  5- Seal the green bag.<br/>
  6- Use a blue security lock to double-seal the green bag.<br/>
  7- Leave the green bag on the counter.
</p>
</IonItem>
</IonItemGroup>,
    ];

    const MessageListWeekday = [
      
      //PaperTrail
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Paper Trail Setup</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Grab a standard white envelope from the drawer, write todays date, the day, (friday for example) and your initials.<br /><br />
      Throughout the night, make sure you place your paperwork into this retention envelope to be stored when you're done.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Count the Safe
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting the Safe</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>First, add all of the cash from the drop safe sheet, Hit subtotal. <br /><br />
      Count all change in the safe, hit subtotal. Count all bills in the safe, Total. <br /><br />
      Second, count all stamps including those in the drop safe, one band is $275, one brick is $1100, Total. <br /><br />
      Finally, count all lottery, One wrap is $300.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Accept new Money
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Accepting New Money</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
        
      <p>To accept new money, first you need to count all of the money you are recieving in the bag, be sure to use the calculator as you go. <br /> <br />
      After you've verified the money in the bag, make straps of 50 bills, examples: $50 in ones, $250 in fives $500 in tens <br/> <br/>
      On the computer, go to bank receipt, type in the correct amount and hit ok. <br/><br/>
      Your done!</p>
      </IonItem>
      </IonItemGroup>,
      
      //Accept new Lotto
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Accepting New Lottery</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Check for an orange slept stapled to the lottery invoice, if not present, ask your manager. <br/><br/>
      Count each wrap as $300, keep in mind the invoice will list them at a lower value. <br/><br/>
      Once you have added up all of the new wraps on the calculator login to the office and open bank reciept. <br/><br/>
      Click the corporate office tab and enter the ammount in the lottery row. <br/><br/>
      Your done!</p>
      </IonItem>
      </IonItemGroup>,
      
      //157 Setup one
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>157 Initial Setup</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>First, make sure that the scratch pad on the computer is empty, if it has any amount in it, clear it by entering the amount shown <br/><br/>
      Grab one tray each of quarters, dimes, nickles, and pennies, Set them aside inside the safe if they fit, or on the counter if they don't <br/><br/>
      Grab three straps of ones, one strap of fives, and one strap of tens, and set them aside as well <br/><br/> 
      Type 157.1 and hit ref on the calculator then type $1075, the total value of the set aside currency. <br/><br/>
      Loan $1075 to 157 on the computer, then pick up the same amount. $1075 will be in the scratch pad. <br/><br/>
      While counting, do not add to, subtract from, or lose any of the set aside currency for 157, you will need to count any left over later</p>
      </IonItem>
      </IonItemGroup>,
      
      //Overlimit
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Viewing Over Limit Report</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>The Over limit report shows the amount of money in each till, this will help you decide what to pick up first. <br/><br/>
      Any line till over $600 can be consider 'fat' and should be picked up sooner rather than later. <br/><br/>
      Front Service tills should be picked up as soon as possible as they typically contain $2000 or more. <br/><br/>
      On the Paper Till List, mark fat tills with an F for your reference.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Paper Till Setup
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Paper Till List Setup</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>This is simply a list of tills to keep you on track for the evening and to communicate to the front end what tills they can use. <br/><br/>
      On a sticky-note, make a list from 1 to 8, then 151, and 152. These are the tills available. <br/><br/>
      Take a moment to view the schedule and mark any tills that will be in use after 7pm with the time the cashier leaves that till. <br/><br/>
      Finally, it's good practice to note down your paper work tasks, such as Western Union, SSCC, and Money Orders.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Till Counting
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting Tills</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
      1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
      2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
      3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
      4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
      5- After the counter finishes, add the total on the calculator. <br/>
      6- Add coin rolls in the till to the calculator. <br/>
      7- Add coins together one type at a time (Ex: Quarters). <br/>
      8- Subtotal then subtract the cash amount from the till report <br/>
      9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
      10- Count and Add stamps, hit enter <br/>
      11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
      If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
      Front Desk tills also get an extra roll of quarters, dimes, and nickles.
      12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p> 
      </IonItem>
      </IonItemGroup>,
      
      //157.1 to 157.2
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting and setting up 157.1/157.2</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>1- On the calculator type 157.1 and hit ref. <br/>
      2- Add all of the cash in the scratch drawer on the calculator one type at a time (Ex: 20s) <br/>
      3- Add all of the cash you've set aside (Ex: Coin trays, bill straps, etc.) <br/>
      4- Add each till you've set up (Ex: $368 for lines, $1935 for front end) <br/>
      5- Set aside large bills with a paperclip you will be removing them from your next scratch pad. <br/>
      6- Strap any sets of 50 bills you find (Ex: $1000 in 20s)<br/>
      7- Subtotal the amount and click scratch pad on the computer, subtract the amount displayed on the cash line, this should be zero. <br/>
      8- Zero out the scratch pad, staple the 157 references to the printed sheet. <br/>
      9- Before tucking it away, enter 157.2 and hit ref on the calculator, add the last subtotal before you included the tills, subtract big bills and straps of 20s. This is your new scratch pad. <br/>
      10- Tri-Fold the scratch pad paperwork and put your till counts in it, neatly slide it into your Envelope.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Counting tills
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting Tills</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
      1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
      2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
      3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
      4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
      5- After the counter finishes, add the total on the calculator. <br/>
      6- Add coin rolls in the till to the calculator. <br/>
      7- Add coins together one type at a time (Ex: Quarters). <br/>
      8- Subtotal then subtract the cash amount from the till report <br/>
      9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
      10- Count and Add stamps, hit enter <br/>
      11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
      If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
      Front Desk tills also get an extra roll of quarters, dimes, and nickles.
      12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p> 
      </IonItem>
      </IonItemGroup>,
      
      //157.2 to 157.3
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting and setting up 157.2/157.3</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>1- On the calculator type 157.2 and hit ref. <br/>
      2- Add all of the cash in the scratch drawer on the calculator one type at a time (Ex: 20s) <br/>
      3- Add all of the cash you've set aside (Ex: Coin trays, bill straps, etc.) <br/>
      4- Add each till you've set up (Ex: $368 for lines, $1935 for front end) <br/>
      5- Set aside large bills with a paperclip you will be removing them from your next scratch pad. <br/>
      6- Strap any sets of 50 bills you find (Ex: $1000 in 20s)<br/>
      7- Subtotal the amount and click scratch pad on the computer, subtract the amount displayed on the cash line, this should be zero. <br/>
      8- Zero out the scratch pad, staple the 157 references to the printed sheet. <br/>
      9- Before tucking it away, enter 157.3 and hit ref on the calculator, add the last subtotal before you included the tills, subtract big bills and straps of 20s. This is your new scratch pad. <br/>
      10- Tri-Fold the scratch pad paperwork and put your till counts in it, neatly slide it into your Envelope.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Performing Pickups
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Performing Pickups</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Before you exit the office, grab a spare blue bag from the shelf to collect 138. <br/>
      1- Grab 138 keys, go to the ITVM (138) use the large key to open the front panel, then the smaller key to access the cash box, collect all cash inside placing it in the blue bag then close both.<br/>
      2- For 140, take only big bills, coupons, and 20s to get the till close to $200. Write down the amount you take on the lottery sheet for your front end. <br/>
      3- While there are no customers at active tills, have the cashier unlock their till so you can perform a pickup. <br/>
      4- Print a till report and place it inside the coupon bag. <br/>
      5- Take all checks and large bills, then take any 20s in excess of $100. If they have an exceptionally large amount of other bills, consider taking some of those as well. Place all currency in the blue bag. <br/>
      6- Repeat steps 2 through 4 for all other active tills. <br/><br/>
      Once in the back office you can begin counting the pick ups one at a time, as you're not setting up any tills this is a quick process. <br/><br/>
      1- Using the till report, type the till # into the calculator and hit ref.<br/>
      2- Put all bills into the counter and hit cont while it is in mix mode. Add the total to the calculator.<br/>
      3- Subtotal the amount and subtract the cash from the till report. <br/>
      4- Add checks, subtotal, then subtract checks from the till report. <br/>
      5- Repeat steps 1 through 4 for the remaining pickups.<br/>
      6- Pickup each amount from the office on the computer.</p>
      </IonItem>
      </IonItemGroup>,
      
      //157.3
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Count 157.3</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Because you only performed pickups on this run, you do not need to physically count your scratch drawer as you only added currency to it.<br/><br/>
      Simply add up the amounts you collected from each pickup as well as the amount you loaned and picked up from 157. Subtotal and subtract from the scratch pad amount, it will be zero.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Deposits
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Setting up Deposits</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>1- Collect a clear check bag, white cash bag, the deposit log from the safe, a deposit slip booklet from the drawer, and a pen.<br/>
      2- On the safe deposit log, add the date on two new lines, then noting previous entries note down the information for cash and checks. <br/>
      3- On the cash line write down the deposit bag number on the white bag. Do the same for the check line and the clear bag.<br/>
      4- On each bag, the reciever is USB, sender is your store number, also write the current date, and your name.<br/>
      5- On the deposit slip write the date at the top, your name at the bottom, and the deposit bag number.<br/><br/>
      Its best to perform deposits at the end of the night, ensuring no one bag is over $6000, you can technically complete a deposit now if you want, see finishing deposits if you would like to do that now.</p>
      </IonItem>
      </IonItemGroup>,
      
      //SSCC Bags
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Check SSCC for full bags</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Simply head outside and check if the red SSCC light is flashing, if it is, get the key from the front desk, open up the SSCC, remove the full bag, seal it, replace it, and take the full bag to the office.<br/><br/>
      SSCC Deposit:<br/>
      1- Place the SSCC coin bag on the counter.<br/>
      2- Fill out the information on the SSCC bag including your name, the amount, and the date.<br/>
      3- Get a deposit slip from the drawer and fill it out with the amount from the bag, the date, your name, and the bag number.<br/>
      4- Grab an adhesive clear slip bag from the shelf.<br/>
      5- Carefully put the clear slip bag on the back of the coin bag.<br/>
      6- Verify the information on white slip is correct then tear it and the yellow slip away.<br/>
      7- Place the white slip into the pouch on the back and seal it.<br/>
      8- Tear away the top slip and staple it to the yellow slip.<br/>
      9- On the computer, open the deposit menu, and enter the information into the SSCC line.<br/>
      10- Write the cash amount and bag number on the Brinks Deposit Sheet on a new SSCC line.<br/>
      10- Place the slip in the deposit slip retention bin.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Counting Tills
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Counting and Setting up tills</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>When counting tills, you should be careful not to mix any of the currency from that till with your scratch pad until you have finished. <br/><br/>
      1- When collecting the till, ensure that you print a till report and also grab the coupon bag at the register. <br/>
      2- On the calculator type the tills number (EX: 104) and hit ref. <br/>
      3- Grab the 20s, 10s, 5s, and 1s. Stack them neatly together in order, place them in the counter ensuring it is in mix mode, and hit cont. <br/>
      4- While the counter is counting, check for any checks and large bills, count large bills by hand and add them, set checks aside. <br/>
      5- After the counter finishes, add the total on the calculator. <br/>
      6- Add coin rolls in the till to the calculator. <br/>
      7- Add coins together one type at a time (Ex: Quarters). <br/>
      8- Subtotal then subtract the cash amount from the till report <br/>
      9- Add up checks one at a time on the calculator, subtotal, subtract checks from till report, hit enter <br/>
      10- Count and Add stamps, hit enter <br/>
      11- Setup the till so it is exactly $368, that's $100 each in 20s, 10s, and 5s, A strap of ones, Two rolls of pennies, and a roll each of .25, .10, and .05 <br/><br/>
      If you are counting a front desk till, make sure to use the counters sort function for each bill type (Ex: 20s) as it gets one strap each, except three straps of ones. <br/><br/>
      Front Desk tills also get an extra roll of quarters, dimes, and nickles.
      12- After you have finished counting and setting up each till, pick up all three tills on the computer.</p>
      </IonItem>
      </IonItemGroup>,
      
      // MLP for 138 and 140
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Perform MLP for 138 and 140</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>
        After you have counted 138 and 140 you need to perform an operation called MLP which works like so:<br/>
        1- Click miscelanious reciept on the computer.<br/>
        2- Click the top row for lottery.<br/>
        3- Enter the third amount from your till count for 138 which is negative cashes + positive cashes.<br/>
        4- Hit apply and do the same using the number from 140.<br/>
        5- Loan that same amount to 138 and 140 respectively.<br/>
        6- Perform normal pickups making sure to skip the amount you previously did misc receipt for and loaned.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Cash Deposit
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Setup Cash Deposit</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>
        Cash deposits must not be done until 'all' tills have been counted, once you've made sure all tills are counted do the following:<br/>
        1- Count all big bills (50's and 100's) one type at a time, then add the totals together and rubberband the bills together.<br/>
        2- Get a cash band, if the total does not match the band, write the total on the white side, adding it again.<br/><br/>

        Looks something like this:<br/>
        50 - 1000<br/>
        100 - 1500<br/>
        ----------<br/>
        2500<br/><br/>

        3- Set the bills aside, do the same for 20's and strap them by the thousands.<br/>
        4- With leftover 20's add them on a new line, then add 10's 5's 2's and 1's respectively.<br/>
        5- Rubberband and write out a cash band for them as above.<br/>
        6- If there are any odd coins such as $1 or $0.50 pieces, put them in a pouch and write the amount on the pouch.<br/>
        7- Add the totals of all cash bands together on the calculator and set all bills aside until you do your preliminary count.<br/>
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Tidel
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Tidel to SSCC</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>At the end of the night, you have two options for handling loose coin in 157. You can deposit it with the rest of your money, or you can put it in SSCC.<br/>
      In this case, we want to put coins in SSCC.<br/>
      1- Take the 157 drawer out to the SSCC machine, remember to get the SSCC key.<br/>
      2- Open the panel with the key and hold enter until the screen changes.<br/>
      3- Press 'start batch'.<br/>
      4- Put the coins into the machine ensuring you don't lose any.<br/>
      5- Press the red stop button.<br/>
      6- Press 'end'.<br/>
      7- Print a new bag report, you will use this when you declare, so don't lose it.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Preliminary Safe Balance.
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Balancing the Safe</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Once you have counted all of the tills, you can balance the safe, its best to do this before you deposit to ensure accuracy.<br/><br/>
      1- Count up your cash for your deposit (See finish Deposits).<br/>
      2- Take your left-over loose coin and run them through SSCC if you haven't already using the manual inside the SSCC door, (Or count them by hand). <br/>
      3- Using the Cash Office PM Sheet, Add up all cash for the appropriate lines, because its saturday, leave strapped cash out of your drop. You should add $200, $1935, $1935, $3312, Cash Straps, Coins in safe, Cash in drop.<br/>
      4- Subtotal the above, now add your cash deposit as well as your loose coin count and hit subtotal <br/>
      5- Preview but do not print a TFCA, subtract the cash total. It should be zero <br/>
      6- If the total is 'not' zero, it means you've made a mistake earlier in the evening, if its under $10 move on, if its over $10 take a deep breath and try to find it. Make a note if you can't.<br/><br/>
      
      Common Errors include:<br/>
      1- Too many bills in a till. (Will be under a very specific amount, like $20)<br/>
      2- Not enough bills in a till. (Will be over a very specific amount, like $20)<br/>
      3- Miscounted the deposit.<br/>
      4- Miscounted the drop safe.<br/>
      5- Miscounted change in safe.<br/>
      6- Miscounted a tills pickup. (Cannot be found/fixed on your own)</p>
      </IonItem>
      </IonItemGroup>,
      
      //Finishing Deposits
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
      <IonTitle class='titlefont3'>Finishing Deposits</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Once you are satisfied with your prilimenary balance, you can perform your final balance.<br/><br/>
      Checks:<br/>
      1- On the computer, open the deposit menu.<br/>
      2- The new menu will show you the amount of checks you should have, verify that the amount is correct, then write these down in the 'number of items' box on the deposit slip.<br/>
      3- Verify that the cash value of the checks is correct then write it down in the 'checks amount', 'total' and the sideways total boxes.<br/>
      4- Verify that the date, your name, and the correct bag number are on the deposit slip, then tear away both the white and yellow slips.<br/>
      5- Place the white slip in the back of the deposit bag.<br/>
      6- Write the cash amount of the checks on the front of the clear deposit bag at both the top, and center areas.<br/>
      7- Place 'all' checks in the bag ensuring each as been store stamped.<br/>
      8- Seal the front and back of the bag and tear away the top.<br/>
      9- Staple the plastic top of the bag to the yellow slip neatly.<br/>
      10- In the deposit screen on the computer, enter the information from the yellow slip into the check line and hit apply.<br/>
      11- Write the cash amount and bag number on the Brinks Deposit Sheet on a new check line.<br/>
      12- Place the slip in the deposit slip retention bin.<br/><br/>

      Cash:<br/>
      1- Earlier you already made cash bands and added them together, write this amount on the white deposit bag.<br/>
      2- On the deposit slip write the cash amount of each 'type' of currency down one by one.<br/>
      3- Write the total in the total box in the middle, bottom, and the individual boxes along the side.<br/>
      4- Verify that the date, your name, and the bag number are correct then tear away the white and yellow slips.<br/>
      5- Write the cash total on the bag in the middle and top areas of the bag.<br/>
      6- Place the white slip into the pouch on the back.<br/>
      7- Place all cash into the main pouch and seal the bag.<br/>
      8- Tear away the top strip and staple it to the yellow slip.<br/>
      9- On the computer, enter the information into the cash deposit line in the deposit window.<br/>
      10- Write the cash amount and bag number on the brinks deposit sheet. <br/>
      11- Place the slip in the deposit slip retention bin.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Reports
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>WU, MO, and SSCC Reports</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>After the store closes you can verify these reports, do not verify these reports before the store closes.<br/>
      1- At store close, you can collect all of the reports at once.<br/>
      2- The Western Union report can be found under other/transaction log on the western union page.<br/>
      3- Money orders are printed at money order terminal, to do this press reports/view/close/yes/yes.<br/>
      4- After Money orders are printed, ensure that you hit no on the terminal to clear the day.<br/>
      5- For SSCC you need the SSCC keys from the front desk.<br/>
      6- At the SSCC machine, open the top panel using the key and hold the enter key until the screen changes.<br/>
      7- Press 'day' then 'print'.<br/>
      8- Press 'bag' then 'print' twice.<br/>
      9- Hold enter to reset the screen and close the panel.<br/>
      10- Back in the office, open the 'daily sales report' and view the last page.<br/><br/>

      Western Union:<br/>
      1- Verify that the amount for sends matches the amount on the daily sales report.<br/>
      2- Write the number of sends and the cash amount on the Western Union folder, ensure you are writing on the correct day.<br/>
      3- Initial the back in the correct day box.<br/>
      4- 'paper clip' the western union paperwork together, this includes all sends and recieves.<br/>
      WARNING: Never staple western union paperwork.<br/><br/>

      Money Orders:<br/>
      1- In the cash office binder, flip over to the money orders folder.<br/>
      2- Verify that the total amount from the Money Order report matches the amount for that day on the daily sales report.<br/>
      3- Write the amount of both on the folder in their respective slots, subtract them from eachother.<br/>
      4- Initial the back of the folder.<br/>
      5- Place the Money Order report in the folder.<br/><br/>

      SSCC:<br/>
      Note: Before you head to the back, you need to cash out the service fee.<br/> 
      1- At a front office till, go into special services.<br/>
      2- Tap 'SSCC Service Fee'.<br/>
      3- Enter the service fee from the day total.<br/>
      4- Press tender/Other Tenders/SSCC Service Fee.<br/>
      5- You may discard the reciept that prints.<br/>
      6- Back in the office, in the cash office binder, flip to the SSCC folder.<br/>
      7- Verify the amounts for the cash total and service fee match the report.<br/>
      8- Write the amounts for the total and service fee from both the computer and report on the folder<br/>
      9- Place one of the two bag total reciepts into the magnetic shelf clip.<br/>
      10- Staple the rest of the SSCC paperwork together, including batches from 151/152.<br/>
      11- Place paperwork into the folder.
      </p>
      </IonItem>
      </IonItemGroup>,

      //Locking Tills
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Lock Tills</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Once all tills have been picked up and built, you can perform locking.<br/>
      1- Check for 'unrecalled saved orders' print them out.<br/>
      2- 'Remote log off' all cashiers if any are still logged in, including yourself.<br/>
      3- Click 'lock tills', click all, click ok.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Final balance
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Final Balance</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>At this point the safe is almost balanced for you already, but there are a few more things to count.<br/><br/>
      Cash:<br/>
      1- Using the PM safe balancing worksheet, add all tills including 140 together seperating 140, 151, 152, and Line tills.<br/>
      2- Add all money from the drop safe worksheet.<br/>
      3- Add coins from the safe.<br/>
      4- Print a TFCA report.<br/>
      5- Subtract the cash line from the TFCA report.<br/>
      6- Write the total amount on the PM safe balancing sheet on the proper line.<br/>
      Note: If you put TIDEL into SSCC instead of depositing it, you will be off exactly that amount. It will balance during decleration.<br/><br/>

      Stamps:<br/>
      1- Add any loose stamps you have out and attach the count to the tickets.<br/>
      2- Add all bricks in the door.<br/>
      3- Add the stamps currently in all tills.<br/>
      4- Add stamps in the drop safe.<br/>
      5- Write the total on the PM safe balancing sheet on the proper line.<br/>
      Note: Stamps should 'never' be off by any amount, if they are off, count again.<br/><br/>

      Lotto:<br/>
      1- Add the total amount of all lottery bricks in the safe.<br/>
      2- Add misc lottery in the safe.<br/>
      3- Add lottery collected from 140. <br/>
      4- Subtotal the amount.<br/>
      5- Add the ticket amount from 138.<br/>
      6- Write the total on the PM safe balancing sheet on the proper line.<br/><br/>

      Other:<br/>
      1- Write the lottery redeemed amount on the PM safe balancing work sheet.<br/>
      2- Write Western Union payouts on the PM safe balancing work sheet.<br/>
      3- Write the SSCC bag total from the 'new' sheet on the PM safe balancing work sheet.
      </p>
      </IonItem>
      </IonItemGroup>,
      
      //Safe Declaration
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Safe Decleration and Locking</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>To perform safe Decleration enter the amounts from the PM safe balancing work sheet.<br/>
      Before you hit apply, write the total at the bottom of the window on the Safe Balancing work sheet.<br/><br/>
      After declaring, you can immediately perform a safe lock. The physical safe itself does not need to be locked for this, you aren't going to set off any alarms.<br/>
      To safe lock:<br/>
      1- Click 'Safe Locking'<br/>
      2- Click 'Ok'<br/>
      3- If you recieve a warning that you are off hit yes.<br/>
      4- Click the check box to select the safe then click ok.
      </p>
      </IonItem>
      </IonItemGroup>,
       
       //Final Reports
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Final Reports</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>The last reports you need to do are a final TFCA, the Over/Short, Deposits, and the Safe Report that already printed.<br/><br/>
      Note: Deposits are printed from the accounting activity audit report window.<br/>
      1- Hole punch all four reprts.<br/>
      2- Place the over-short report in the black over-short report binder.<br/>
      3- Place the Safe Report in the white Safe Report binder.<br/>
      4- In the georgia check cashing log, flip to the numeric day of the month.<br/>
      5- Place, in order, the AM TFCA, the check cashing log, the TFCA, and lastly the bank deposits.</p>
      </IonItem>
      </IonItemGroup>,
      
      //Storing paper trail
      <IonItemGroup>
      <IonItemDivider class = 'textback3'>
        <IonTitle class='titlefont3'>Storing Paper Trail</IonTitle>
      </IonItemDivider>
      <IonItem class='textfont3' lines="none">
      <p>Ensure that all other paperwork is in your retention envelope.<br/>
      Seal the retention envelope and place it in the retention drawer in the slot for todays day.<br/><br/>
      Note: There should be 'no' paperwork outside of your retention envelope, paperwork may be lost if not inside the envelope.</p>
      </IonItem>
      </IonItemGroup>
          ];

  var Day = new Date().getDay();
  
  const DoW = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
  ]

  function ModalMaker (e:any){
    
    setShowModal(true);
    setCount(e);
  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='textback3'>
          <IonTitle class='titlefont3'>Closer Tasks for {DoW[Day]}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        {Day === 6 ? checkboxListSaturday.map(({ val, isChecked }, i) => (
          <IonItem key={i} class ='item2'>
            <IonButton onClick={() => ModalMaker(i)}>Help</IonButton>  
            <IonLabel>{val}</IonLabel>
            <IonCheckbox class='checkbox' slot="end" value={val} checked={isChecked} color="tertiary" />
          </IonItem>
        )): 
        checkboxListWeekDay.map(({ val, isChecked}, i) => (          
          <IonItem key={i} class ='item2'>
            <IonButton onClick={() => ModalMaker(i)}>Help</IonButton>  
            <IonLabel>{val}</IonLabel>                         
            <IonCheckbox class='checkbox' slot="end" value={val} checked={isChecked} color="tertiary"  />
            
          </IonItem>))}
      <IonModal isOpen={showModal} cssClass='model' backdropDismiss={false} >
      <IonContent scrollY={true} class='textback3'>
        <IonLabel> {Day === 6 ? MessageListSaturday[count] : MessageListWeekday[count]} </IonLabel>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonContent>
      </IonModal>
      </IonContent>
    </IonPage>
    
  );
  
};



export default Tab3;
