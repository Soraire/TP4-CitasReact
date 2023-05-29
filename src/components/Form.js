import Input from "./Input";
import React, { useState } from "react";
export default function Form({onCreateAppointment}) {
const [idState, setId] = useState(0);
const CreateAppointment = (data) => {
    console.log(data)

data.preventDefault();
let newAppointment = {
id: idState,
Pet: data.target.pet.value,
Owner: data.target.owner.value,
Date: data.target.date.value,
Time: data.target.time.value,
Symptoms: data.target.symptoms.value
}
setId(idState+1)
data.target.pet.value = ''
data.target.owner.value = ''
data.target.date.value = ''
data.target.time.value = ''
data.target.symptoms.value = ''
onCreateAppointment(newAppointment);
}

return (
<>
<form onSubmit={(data) => CreateAppointment(data)}>
<Input type="text" name="Pet" placeholder="Pet" required className="u-full-width" title="pet" />
<Input type="text" name="Owner" placeholder="Owner" required className="u-full-width" title="owner" />
<Input type="date" name="Date" className="u-full-width" title="date" />
<Input type="time" name="Time" placeholder="Time" className="u-full-width" title="time" />
<label>Symptoms</label>
<textarea name="symptoms" className="u-full-width"></textarea>
<button type="submit" className="u-full-width button-primary">CreateAppointment</button>
</form>
</>
)
}