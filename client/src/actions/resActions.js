import axios from "axios";

export const registerReservation = (reservation, history) => dispatch => {
    axios.post("http://localhost:9000/reservations", reservation).then(res => history.push("/")).catch(err => console.log(err));
}