// import React from 'react'

import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";
import useAxiosCqre from "./useAxiosCqre";

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosCqre = useAxiosCqre();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosCqre.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    });
    return [isAdmin, isAdminLoading]
}

export default useAdmin;