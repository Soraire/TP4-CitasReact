import Cita from "./Cita";
export default function ListAppointments({ list, EraseAppointment }) {
return (
<>
{list.map((item, index) => (
<>
<Cita obj = {item} key = {index} borrar={EraseAppointment}/>
</>
))}
</>
)
}