import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Keycloak from 'keycloak-js';
import {  } from 'keycloak-js';
import App from './App';
import './index.css';

const keycloak: Keycloak.KeycloakInstance = Keycloak();

keycloak.init({ onLoad: 'login-required' })
  .success(() => {
      ReactDOM.render(
        <App />,
        document.getElementById('root') as HTMLElement
      );
    })
  .error(error => console.log(error));
