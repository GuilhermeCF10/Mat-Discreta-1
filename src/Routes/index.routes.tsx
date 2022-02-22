import React from "react";

import { Routes, Route } from "react-router-dom";

//
import Home from "Pages/Index";
import SeeGroup from "Pages/Group";
import ChooseEditGroup from "Pages/ChooseEditGroup";
import EditGroup from "Pages/EditGroup";

// *******************************************************
// JSON
import jsonGroups from "Database/groups.json";
// *******************************************************
// Router DOM
import { useLocation } from "react-router-dom";
// *******************************************************
// Hooks
import { useGeneral } from "Hooks/general";
// *******************************************************
// Images
const Group1Image = require("Assets/group1.jpg");
const Group2Image = require("Assets/group2.jpg");
const Group3Image = require("Assets/group3.jpg");
const Group4Image = require("Assets/group4.jpg");
const Group5Image = require("Assets/group5.jpg");
const Group6Image = require("Assets/group6.jpg");
// *******************************************************

const IndexRoutes: React.FC = () => {
  const { loading, authenticated } = useGeneral();
  // const { user, authenticated } = useUser();
  const location = useLocation();
  console.log(typeof location.pathname);

  // if (loading) {
  // return <Loading />;
  // };

  // function CustomRoute({ ...rest }) {
  //   console.log(rest);
  //   return <Route path="/edit" element={<ChooseEditGroup />} />;
  // if ( !authenticated ) {
  // Not logged in people do not acess any private or admin pages
  // if ( {...rest}.isAdminPage) {
  // return <Route path="/" element={<Home />} />;
  // }
  // } else if ( user.isAdmin === false ) {
  //     // Common User logged in do not acess login and register and admin pages
  //     if ( ({...rest}.isAdminPage) ||
  //         ({...rest}.isLoginPage) ||
  //         ({...rest}.isRegisterPage) ) {
  //         return <Redirect to="/" />;
  //     }
  // } else if ( user.isAdmin === true ) {
  //     // Super User logged in do not acess login and register
  //     if ( ({...rest}.isLoginPage) ||
  //         ({...rest}.isRegisterPage) ) {
  //         return <Redirect to="/" />;
  //     }

  // If it's super user it opens all pages because acess its "Acess Granted"
  // return <Route {...rest} />;
  // }
  // let element = useRoutes([
  //   // These are the same as the props you provide to <Route>
  //   { path: "/", element: <Login /> },
  //   // {
  //   //   path: "/cryptocurrencies",
  //   //   element: <Cryptocurrencies />,
  //   //   // Nested routes use a children property
  //   //   children: [{ path: ":coinId", element: <CryptoDetails /> }],
  //   // },
  //   // {
  //   //   path: "/exchanges",
  //   //   element: <Exchanges />,
  //   // },
  // ]);

  // // The returned element will render the entire element
  // // return <h1>Olá no routes</h1>;
  // // hierarchy with all the appropriate context it needs
  // return element;
  return (
    <Routes>
      {authenticated ? (
        <>
          <Route path="/edit" element={<ChooseEditGroup />} />
          <Route
            path="/edit_grupo1"
            element={<EditGroup group={jsonGroups[0]} />}
          />
          <Route
            path="/edit_grupo2"
            element={<EditGroup group={jsonGroups[1]} />}
          />
          <Route
            path="/edit_grupo3"
            element={<EditGroup group={jsonGroups[2]} />}
          />
          <Route
            path="/edit_grupo4"
            element={<EditGroup group={jsonGroups[3]} />}
          />
          <Route
            path="/edit_grupo5"
            element={<EditGroup group={jsonGroups[4]} />}
          />
          <Route
            path="/edit_grupo6"
            element={<EditGroup group={jsonGroups[5]} />}
          />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/grupo1" element={<SeeGroup group={jsonGroups[0]} />} />
          <Route path="/grupo2" element={<SeeGroup group={jsonGroups[1]} />} />
          <Route path="/grupo3" element={<SeeGroup group={jsonGroups[2]} />} />
          <Route path="/grupo4" element={<SeeGroup group={jsonGroups[3]} />} />
          <Route path="/grupo5" element={<SeeGroup group={jsonGroups[4]} />} />
          <Route path="/grupo6" element={<SeeGroup group={jsonGroups[5]} />} />
        </>
      )}
    </Routes>
  );
};

export default IndexRoutes;
