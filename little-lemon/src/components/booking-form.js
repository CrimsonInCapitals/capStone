import Section from "./section";
import {useEffect, useState} from 'react'
import { useHoursContext } from "../context/hours";
import useBooking from "../hooks/useBooking";
import {ac1,ac2,pr1,pr2} from '../components/colors'
const BookingForm =()=> {
   const days = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday']
   const dates = ['0th','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st']
   const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']
   const [stage,setStage] = useState(1)
   const {isLoading,response,submit} = useBooking()
   const ophours = useHoursContext();
   const [hoursRange,setHoursRange]= useState([11,12,13,14,15,16,17,18,19,20]);
   const [minuteRange,setMinuteRange]= useState([0,15,30,45])


   const HandleSubmit = (e,date) => {
      e.preventDefault()
      submit('/',date,stage,setStage)
   }
   const [variables,setVariables] = useState({//the date time and guestcount for the booking
      date: new Date().toISOString().split('T')[0],
      hour: ophours[new Date().getDay()].oh,
      minute: ophours[new Date().getDay()].om,
      guests: ''
   })
   const [info, setInfo] = useState({//the personal info for the booking
      name: '',
      email:'',
      occassion: 'No',
      otherOccassion: ''
   })
   const updateHours = (date=variables.date)=>{
      let day =  new Date(date).getDay()
      let list = []
      for(let i = ophours[day].oh;i <= ophours[day].lastbookingh;i++){
         list.push(Number(i))
      }
      setHoursRange(list)
   }
   const updateMinute = (hour=variables.hour)=>{
      let day = new Date(variables.date).getDay()
      let list = []
      if(hour === ophours[day].oh){
         for(let i = Number(ophours[day].om);i<=45;i=i+15){
            list.push(i)
         }
      }else if(hour === ophours[day].lastbookingh){
         for(let i = 0;i<=ophours[day].cm;i=i+15){
            list.push(Number(i))
         }
      }else{ list= [0,15,30,45]}
      setMinuteRange(list)
   }
   useEffect(()=>{
      updateHours(variables.date)
   },[variables.date])
   const ClearVariables = ()=> setVariables({date: new Date().toISOString().split('T')[0],
   hour: ophours[new Date().getDay()].oh,
   minute: ophours[new Date().getDay()].om,
   guests: ''})
   const ClearInfo = ()=> setInfo({name:'',email:'',occassion:'No',otherOccassion:''})

   return (
      <>
         <Section className='booking' color={ac1}>
            <picture>
               <img src={require("../img/reserve.png")} alt="booking stage"/>
            </picture>
            <div>
         {!isLoading && response && response.message && <h2 className={response.messagetype && response.messagetype}>{response.message}</h2>}
         {isLoading && stage === 1 &&
            <h2>checking avalibility</h2>
         }{isLoading && stage === 2 &&
            <h2>submitting booking</h2>
         }{isLoading && stage === 3 &&
            <h2>Loading</h2>
         }
         {!isLoading && stage === 1 &&
                    <form onSubmit={e=>HandleSubmit(e,variables)}>
                      <label>
                     Select a date:
                    <input type='date' value={variables.date} onChange={e=>{{setVariables({...variables,date:e.target.value});}updateHours(e.target.value)}}/>
                    </label>
                    <label>
                       Select a time:
                       <div className="time">
                       <select name="hour" value={variables.hour} onChange={e =>{setVariables({...variables, hour: e.target.value});updateMinute(e.target.value)}}>
                           {hoursRange.map((number)=> (<option key={number}>{number}</option>))}
                       </select>:
                       <select name="minute" value={variables.minute} onChange={e=>setVariables({...variables, minute:e.target.value})}>
                        {minuteRange.map((number)=>(<option key={number}>{number === 0? '00': number}</option>))}
                       </select>
                       </div>
                    </label>
                    <label>
                         Group size:
                         <input name='quests' type='number' value={variables.guests} onChange={e=>setVariables({...variables,guests:e.target.value})}/>
                    </label>
                    <button className="booking" type='submit'>Check avalibility</button>
                    <button className="booking second" onClick={ClearVariables} type="button">Clear</button>
                 </form>
         }{!isLoading && stage === 2 &&
            <form onSubmit={e=>HandleSubmit(e,info)}>
            <label>
               Your Name:
               <input type='text' name='name' value={info.name} onChange={e=>{setInfo({...info, name: e.target.value})}}/>
            </label>
            <label>
               Your Email Address:
               <input type='email' name='email' value={info.email} onChange={e=>{setInfo({...info, email: e.target.value})}}/>
            </label>
            <label>
             Is this a special occaasion?
             <select value={info.occassion} onChange={e=>{setInfo({...info,occassion: e.target.value})}}>
                 <option>No</option>
                 <option>Birthday</option>
                 <option>Anniversary</option>
                 <option>Other</option>
             </select>
            </label>
            {info.occassion === 'Other' && <label>
              What is the occaasion?
              <input type='text' value={info.otherOccassion} onChange={e=>setInfo({...info, otherOccassion: e.target.value})}/>
            </label>}
            <button className="booking" type='submit'>Reserve table</button>
            <button className="booking second" type="button" onClick={ClearInfo}>Clear</button>
            <button className="booking second" type="button" onClick={e=>{setStage(0);submit('/',variables,0,setStage)}}>Go back</button>
         </form>
         }{!isLoading && stage === 3 &&
            <h2>Your booking has been made. We'll see you on {days[new Date(variables.date).getDay()]} the {dates[new Date(variables.date).getDate()]} of {months[new Date(variables.date).getMonth()]}</h2>
         }
         </div>
         </Section>
      </>
    )
}

export default BookingForm