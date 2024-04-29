import axios from "axios";

export async function getMonthlyInstalls(){
  const res = await axios.get('http://localhost:5100/api/monthly-installs')
    .then(res => res.data)

    return res
}