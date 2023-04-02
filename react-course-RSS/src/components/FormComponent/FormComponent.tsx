import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormFields, FormComponentProps, IUserCard } from '../../types';
import InputText from '../UI/InputText/InputText';
import OptionElement from '../UI/OptionElement/OptionElement';
import InputRadio from '../UI/InputRadio/InputRadio';
import Switcher from '../UI/Switcher/Switcher';
import SubmitButton from '../UI/Button/SubmitButton';

import './formComponent.css';

export default function FormComponent(props: FormComponentProps) {
  const [loadMessage, setLoadMessage] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  async function loadingHandler(): Promise<void> {
    setLoadMessage('Card was created successfully');
    setTimeout(() => {
      setLoadMessage('');
    }, 1500);
  }

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    await loadingHandler();

    const urlToImage =
      data.file && data.file[0] ? URL.createObjectURL(data.file[0]) : '';

    const dataForTransfer: IUserCard = {
      id: String(Date.now()),
      name: data.firstName,
      lastName: data.lastName,
      birthDay: data.birthDay,
      meal: data.meal,
      social: data.social,
      image: urlToImage,
    };

    const { getUserCard } = props;
    getUserCard(dataForTransfer);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-block"
      data-testid="formTag"
    >
      <InputText
        type="text"
        id="nameInput"
        placeholder="-- your name --"
        errors={errors}
        rest={{
          ...register('firstName', {
            required: `Field should be not empty`,
            minLength: {
              value: 4,
              message: 'Minimum 4 letters, please',
            },
          }),
        }}
      />
      <InputText
        type="text"
        id="lastNameInput"
        placeholder="-- your last name --"
        errors={errors}
        rest={{
          ...register('lastName', {
            required: `Field should be not empty`,
            minLength: {
              value: 4,
              message: 'Minimum 4 letters, please',
            },
          }),
        }}
      />

      <InputText
        type="date"
        id="birthDayInput"
        placeholder=""
        errors={errors}
        rest={{
          ...register('birthDay', {
            required: `Field should be not empty`,
            validate: {
              olderTenYears: (value: string) => {
                const year = new Date().getFullYear();

                const errorYear =
                  year - 2 < Number(value.slice(0, 4))
                    ? 'Your birth year must be 2 points less than current'
                    : undefined;

                return errorYear;
              },
            },
          }),
        }}
      />

      <InputText
        type="file"
        id="fileImg"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        errors={errors}
        rest={{
          ...register('file', {
            required: `Field should be not empty`,
          }),
        }}
      />

      <OptionElement
        id="mealSelect"
        variants={[
          '--select your favorite meal--',
          'MeatBalls',
          'Vegetables',
          'Crisps',
          'FruitPie',
        ]}
        errors={errors}
        rest={{
          ...register('meal', {
            required: `Field should be not empty`,
            validate: {
              atLeastOne: (value: string) => {
                const checkError = value === '--select your favorite meal--';

                return checkError ? 'You must choice one point' : undefined;
              },
            },
          }),
        }}
      />

      <InputRadio
        title="Select social network for contact"
        errors={errors}
        rest={{
          ...register('social', {
            required: `Please choose some network`,
          }),
        }}
      />

      <Switcher
        errors={errors}
        rest={{
          ...register('switcher', {
            required: `Please agree with policy`,
          }),
        }}
      />

      <SubmitButton />
      <div className="load-card">{loadMessage}</div>
    </form>
  );
}
