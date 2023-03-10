import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import AppLayout from "../layouts/app-layout/appLayout";
import AuthLayout from "../layouts/auth-layout/authLayout";
import HomeScreen from "../screens/home/HomeScreen";
import {
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
    REGISTER_ROUTE,
    TEST_ROUTE,
    PROFILE_PAGE_ROUTE,
    ARTS_PAGE, REGISTRATION_FORM

} from "../constants/RoutesConfig";
import TestScreen from "../screens/test/testScreen";
import ProfilePageComponent from "../screens/profile-page/ProfilePageComponent";
import ArtsPageComponent from "../screens/arts-page/ArtsPageComponent";
import RegistrationFormComponent from "../shared/components/registration-form/RegistrationFormComponent";

export interface NavigatorProps {

}

const Navigator = (props: NavigatorProps) => {

    return (
        <>
            <Routes>
                <Route element={<AppLayout/>}>
                </Route>
                <Route path={PROFILE_PAGE_ROUTE} element={<ProfilePageComponent/>}/>
                <Route path={TEST_ROUTE} element={<TestScreen/>}/>
                <Route path={ARTS_PAGE} element={<ArtsPageComponent/>}/>
                <Route path={REGISTRATION_FORM} element={<RegistrationFormComponent/>}/>
                <Route element={<AuthLayout/>}>
                    {/*<Route path={REGISTER_ROUTE} element={<RegisterScreen/>}/>*/}
                </Route>
                <Route index element={<HomeScreen/>}/>
                <Route path={HOME_ROUTE} element={<HomeScreen/>}/>
                <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE}/>}/>
            </Routes>
        </>
    )
};

export default Navigator;



