export default function scheduling() {
  //   const [form, setForm] = useState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     date: "",
  //     description: "",
  //     booked: Boolean,
  //     emailId: "",
  //   });

  const form = document.getElementById("bookingForm");

  //   console.log(first_name);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/booking", {
        first_name: form.elements["first_name"].value,
        last_name: form.elements["last_name"].value,
        email: form.elements["email"].value,
        date: form.elements["date"].value,
        description: form.elements["description"].value,
        booked: form.elements["booked"].value,
        emailId: form.elements["emailId"].value,
      });
      console.log("Server Response:", data);
    } catch (error) {
      console.error(error);
      alert("Username or email already taken");
    }
  }; 

  submit(); 

  //   const change = (e) => {
  //     setForm((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };
}
