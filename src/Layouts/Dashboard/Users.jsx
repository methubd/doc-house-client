import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../components/useAxiosSecure";


const Users = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data: users = []} = useQuery({
        queryKey: ['users', ],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers')
            return res.data;
        }

    })
    
    return (
        <div className="w-full h-screen p-5">
            <h1 className="text-3xl py-5 font-bold">Manage users</h1>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>Photograph and Name</th>
                    <th>User Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    {/* <img src={user?.photoURL} /> */}
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{user?.name}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {user?.username}
                            <br/>
                            <span className="badge badge-ghost badge-sm">{user?.role}</span>
                            </td>
                            
                            <th>
                            <button className="btn btn-ghost btn-xs">Make Admin</button>
                            </th>
                            <th>
                            <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)
                }
                
                </tbody>                
            </table>
            </div>


        </div>
    );
};

export default Users;