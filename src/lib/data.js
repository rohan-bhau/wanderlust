export const getAllDestinations = async() => {
 const res = await fetch("http://localhost:5000/destination");
 return res.json();   
}