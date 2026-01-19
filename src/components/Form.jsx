import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Use custom hook to manage name input with localStorage
  const [name, setName] = useLocalStorage("name", "");
  
  // Use custom hook to manage service number input with localStorage
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="service">Service Number:</label>
        <input 
          type="text" 
          id="service"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;
