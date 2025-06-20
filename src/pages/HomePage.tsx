import React from 'react';
import {useSearchUsersQuery} from '../store/github/github.api'

export function HomePage(){
  const {isLoading, isError, data} = useSearchUsersQuery('Nata');
  console.log('data', data)
  return (
    <div>home</div>
  )
}