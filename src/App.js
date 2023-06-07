import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { func } from 'prop-types';
import { WorkWithInput } from './components/non-yup/WorkWithInput';
import { FormOne } from './components/FormOne';
import { F } from './components/FormOne';
import { FormTwo } from './components/FormTwo';

const validateEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validatePassword = /^[\w]*$/;

export const App = () => {
  return (
    <>
      <FormOne validateEmail={validateEmail} validatePassword={validatePassword} />
      <FormTwo validateEmail={validateEmail} validatePassword={validatePassword} />
    </>
  );
};
