import Image from "next/image";

type Destination = {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};


const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
    const {id} = await params

    const res = await fetch(`http://localhost:8000/destinations/${id}`)
    const destination:Destination= await res.json()
  
    return (
        <div>
           
             <div>
                <Image src={destination.imageUrl} alt=""  height={400} width={400}/>
             </div>
           <h1>{destination.name}</h1>
      <p>{destination.country} · {destination.category}</p>
      <p>{destination.description}</p>
      <p>{destination.duration}</p>
      <p>৳{destination.price.toLocaleString("en-BD")}</p>
      <p>{destination.departureDate}</p>
        </div>
    );
};

export default DestinationDetailsPage;