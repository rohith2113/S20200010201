import { useState, useEffect } from "react"

const Details = () => {
    const temp = [{ "trainName": "Hyderabad Exp", "trainNumber": "2341", "departureTime": { "Hours": 23, "Minutes": 55, "Seconds": 0 }, "seatsAvailable": { "sleeper": 6, "AC": 7 }, "price": { "sleeper": 554, "AC": 1854 }, "delayedBy": 5 }, { "trainName": "Kolkata Exp", "trainNumber": "2345", "departureTime": { "Hours": 20, "Minutes": 15, "Seconds": 0 }, "seatsAvailable": { "sleeper": 16, "AC": 70 }, "price": { "sleeper": 6620, "AC": 6720 }, "delayedBy": 14 }, { "trainName": "Pune Exp", "trainNumber": "2342", "departureTime": { "Hours": 23, "Minutes": 0, "Seconds": 0 }, "seatsAvailable": { "sleeper": 6, "AC": 7 }, "price": { "sleeper": 14, "AC": 9 }, "delayedBy": 17 }, { "trainName": "Amritsar Exp", "trainNumber": "2346", "departureTime": { "Hours": 19, "Minutes": 0, "Seconds": 0 }, "seatsAvailable": { "sleeper": 15, "AC": 10 }, "price": { "sleeper": 15, "AC": 5 }, "delayedBy": 13 }, { "trainName": "Mumbai Exp", "trainNumber": "2343", "departureTime": { "Hours": 22, "Minutes": 37, "Seconds": 0 }, "seatsAvailable": { "sleeper": 8, "AC": 15 }, "price": { "sleeper": 6420, "AC": 6520 }, "delayedBy": 16 }, { "trainName": "Srinagar Exp", "trainNumber": "2349", "departureTime": { "Hours": 14, "Minutes": 55, "Seconds": 0 }, "seatsAvailable": { "sleeper": 1, "AC": 0 }, "price": { "sleeper": 7057, "AC": 7144 }, "delayedBy": 10 }, { "trainName": "Cochin Exp", "trainNumber": "2348", "departureTime": { "Hours": 15, "Minutes": 55, "Seconds": 0 }, "seatsAvailable": { "sleeper": 1, "AC": 0 }, "price": { "sleeper": 2, "AC": 4 }, "delayedBy": 11 }, { "trainName": "Lucknow Exp", "trainNumber": "2347", "departureTime": { "Hours": 17, "Minutes": 33, "Seconds": 0 }, "seatsAvailable": { "sleeper": 5, "AC": 1 }, "price": { "sleeper": 5110, "AC": 6443 }, "delayedBy": 12 }, { "trainName": "Chennai Exp", "trainNumber": "2344", "departureTime": { "Hours": 21, "Minutes": 35, "Seconds": 0 }, "seatsAvailable": { "sleeper": 3, "AC": 1 }, "price": { "sleeper": 2, "AC": 5 }, "delayedBy": 15 }]
    const [traindata, setTrainData] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIxOTU0ODUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiOTkxZWYwMWMtMTVkZS00YzVkLWJjNzItMTczZmRiNzg3ODU2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlMyMDIwMDAxMDIwMSJ9.d7iR5GtpRw0_GZB9tn9ZiR2RTgADto4MM33i6KJHpQ4";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://20.244.56.144/train/trains", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setTrainData(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {temp.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Train Name</th>
                            <th>Train Number</th>
                            <th>Departure Time</th>
                            <th>Seats Available (Sleeper)</th>
                            <th>Seats Available (AC)</th>
                            <th>Price (Sleeper)</th>
                            <th>Price (AC)</th>
                            <th>Delayed By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {temp.map((train, index) => (
                            <tr key={index}>
                                <td>{train.trainName}</td>
                                <td>{train.trainNumber}</td>
                                <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
                                <td>{train.seatsAvailable.sleeper}</td>
                                <td>{train.seatsAvailable.AC}</td>
                                <td>{train.price.sleeper}</td>
                                <td>{train.price.AC}</td>
                                <td>{train.delayedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading train data...</p>
            )}



        </>

    );

}

export default Details