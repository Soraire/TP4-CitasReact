import Appointment from "./Appointment";
export default function AppointmentList({ list, DeleteAppointment }) {
return (
<>
{list.map((item, index) => (
    <>
        <Appointment obj = {item} key = {index} borrar={DeleteAppointment}/>
    </>
))}
</>
)
}