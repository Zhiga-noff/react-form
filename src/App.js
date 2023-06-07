import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { func } from 'prop-types';
import { WorkWithInput } from './components/WorkWithInput';
import { FormOne } from './components/FormOne';

const validateEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validatePassword = /^[\w]*$/;

export const App = () => {
  return (
    <>
      <FormOne validateEmail={validateEmail} validatePassword={validatePassword} />
    </>
  );
};
