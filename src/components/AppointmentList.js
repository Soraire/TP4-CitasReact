import Appointment from "./Appointment";
export default function ListAppointments({ list, EraseAppointment }) {
return (
<>
{list.map((item, index) => (
    <>
        <Appointment obj = {item} key = {index} borrar={EraseAppointment}/>
    </>
))}
</>
)
}