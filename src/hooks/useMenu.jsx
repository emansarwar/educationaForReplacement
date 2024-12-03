import { useQuery } from '@tanstack/react-query';
// import{ useEffect, useState } from 'react'
import useAxiosPubleague from './useAxiosPubleague';

const useMenu = () => {
    const axiosPubleague = useAxiosPubleague();
    
const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() =>{
        const res = await axiosPubleague.get('/menu');
        return res.data;
    }
});


  return [menu, loading, refetch];
}

export default useMenu