import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PublicRoute = ({children}) => {
    const { user, loading } = use(AuthContext);
    if (loading)
        return <Loading></Loading>;
    if (user && user.email)
        return <Navigate to="/" replace/>;
    return children;
};

export default PublicRoute;