import axios from "axios"

  
const Auth = ({onAuth}) => {

    const onSubmit =  async (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        try{

            // const response =  await axios.post("http://localhost:8000/auth",{username: value})
            const response =  await axios.post("http://chat-app-2023-w8g2.onrender.com/auth",{username: value})
               await onAuth({ ...response.data, secret: value });
        }catch(error){
            console.log(`Error: ${error}`)
        }
      };



  return (
    <div className="background">
    <form onSubmit={onSubmit} className="form-card">
      <div className="form-title">Welcome To ChatApp 👋</div>

      <div className="form-subtitle">Set a username to get started.</div>

      <div className="auth">
        <div className="auth-label">Username</div>
        <input className="auth-input" name="username" />
        <button className="auth-button" type="submit">
          Let&apos;s Go!
        </button>
      </div>
    </form>
  </div>
  )
}

export default Auth