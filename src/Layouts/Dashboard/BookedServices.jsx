import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const BookedServices = () => {
    const {user} = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])

    const url = `http://localhost:5000/appointments?email=${user?.email}`
    useEffect(() => {
        fetch (url)
        .then(res => res.json())
        .then(data => {
            setAppointments(data);         
        })

    }, [url])

    const handleAppointmentDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/appointments/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Deleted')
            }
        })
    }

    const total = appointments.reduce((sum, item) => parseInt(item.charge) + sum, 0)
    return (
        <div className="w-full md:px-10 h-screen">
            <Toaster/>
            <div className="flex items-center justify-between py-5">
            <h1 className="text-2xl">Total Payable: <span className="font-bold">{total}</span> </h1>
            <button className="btn">Pay</button>
            </div>

            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Visit</th>
                    <th>Doctor</th>
                    <th>Selected Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    appointments.map((row, index) => <tr
                    key={row._id}
                    >
                        <th>{index + 1}</th>
                        <td>{row.ptName}</td>
                        <td>{row.charge}</td>
                        <td>{row.name}</td>
                        <td>{row.date}</td>
                        
                        <td>
                            <button className="px-2 bg-green-600 mx-2 text-white font-bold rounded-md">U</button>
                            <button onClick={() => handleAppointmentDelete(row._id)} className="px-2 bg-red-600 mx-2 text-white font-bold rounded-md">X</button>
                        </td>
                    </tr>
                    )
                }
                
                </tbody>
            </table>
            </div>
                
        </div>
    );
};

export default BookedServices;