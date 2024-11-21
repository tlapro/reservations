
import { useState } from "react";
import myAppointments from "../../helpers/MyAppointments";
import Appointment from "../../components/Appointment/Appointment"

const MyAppointments = () => {

    const [appointments] = useState(myAppointments)
    console.log(appointments);
    
    return (
        <>
          <h1>Turnos disponibles</h1>
          <div>
            {appointments.map((appointment, index) => (
              <Appointment 
                key={index} 
                date={appointment.date} 
                time={appointment.time} 
                userId={appointment.userId} 
              />
            ))}
          </div>
        </>
      );
    };
    

export default MyAppointments;