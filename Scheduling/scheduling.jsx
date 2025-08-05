import React from "react";

export default function scheduling() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date: "",
    description: "",
    booked: Boolean,
    emailId: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/booking", {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        date: form.date,
        description: form.description,
        booked: form.booked,
        emailId: form.emailId,
      });
      console.log("Server Response:", data);
    } catch (error) {
      console.error(error);
      alert("Username or email already taken");
    }
  }; 

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h3>Scheduling</h3>
      <form lassName="formClass" onSubmit={submit}>
        <label>First Name</label>
        <input type="text" value={first_name} onChange={change} />
        <label>Last Name</label>
        <input type="text" value={last_name} onChange={change} />
        <label>Email</label>
        <input type="text" value={email} onChange={change} />
        <label>Date</label>
        <input type="text" value={date} onChange={change} />
        <label>Description</label>
        <input type="text" value={description} onChange={change} />
        {/* <label>Booked</label> */}
        <input type={Boolean} value={booked} onChange={change} />
        <label>emailId</label>
        <input type="text" value={emailId} onChange={change} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
