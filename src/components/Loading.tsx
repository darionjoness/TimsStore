import React from 'react';
import ReactLoading from 'react-loading';

interface LoadingTypes {
    type: string
    color: string
}
 
const Loading = ({ type, color }: LoadingTypes) => (
    <div className='loadingDiv'>
        <ReactLoading className='loading' type={type} color={color} height={150} width={150} />
    </div>
);
 
export default Loading;