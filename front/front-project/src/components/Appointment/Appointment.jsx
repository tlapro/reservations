// eslint-disable-next-line react/prop-types
const Appointment = ({date, time, userId}) => {

return (
    <div>
        <h2>Turno</h2>
        <h3>Fecha: {date}</h3>
        <h3>Hora: {time}</h3>
        <h3>UserId: {userId}</h3>
    </div>
    );
};

export default Appointment;