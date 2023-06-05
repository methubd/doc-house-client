
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from './useAxiosSecure';

const useBookings = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointments?email=${user?.email}`)
            // console.log('axios res:', res.data);            
            return res.data;
        }
    })

    return [bookings, refetch]
}

export default useBookings;