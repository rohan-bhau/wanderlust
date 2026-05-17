export const getAllDestinations = async() => {
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
 return res.json();   
}