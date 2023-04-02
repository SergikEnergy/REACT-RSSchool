import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormFields, FormComponentProps } from '../../types';
import InputText from '../UI/InputText/InputText';
import OptionElement from '../UI/OptionElement/OptionElement';
// import Switcher from '../UI/Switcher/Switcher';
import SubmitButton from '../UI/Button/SubmitButton';

import './formComponent.css';

const defaultValues = {
  firstName: '',
  lastName: '',
  birthDay: '',
  meal: '--select your favorite meal--',
  file: '',
  switcher: false,
  img: null,
};

export default function FormComponent(props: FormComponentProps) {
  // console.log(props);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  // async function loadingHandler(): Promise<void> {
  //   setLoadMessage('Card was created successfully');
  //   setTimeout(() => {
  //     setLoadMessage('');
  //   }, 2000);
  // }

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    console.log(data);
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
                    : '';

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
                console.log(value);
                const checkError = value === '--select your favorite meal--';

                return checkError ? 'You must choice one point' : '';
              },
            },
          }),
        }}
      />

      <SubmitButton />
      {/* <div className="load-card">{loadMessage}</div> */}
    </form>
  );
}

/*
    return (
      <form
        onSubmit={this.handlerSubmit}
        className="form-block"
        data-testid="formTag"
      >
       
        <InputText
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          name="fileUpload"
          refTo={this.allRefs.fileField}
          id="fileImg"
          onChange={this.handlerChange}
          error={errorFile}
          label="file upload"
        />

        <OptionElement
          refTo={this.allRefs.mealOption}
          name="meal"
          id="mealSelect"
          value={meal}
          variants={[
            '--select your favorite meal--',
            'MeatBalls',
            'Vegetables',
            'Crisps',
            'FruitPie',
          ]}
          error={errorMeal}
          onChange={this.handlerChange}
        />

        <Switcher
          error={errorSwitcher}
          refTo={this.allRefs.switcherField}
          isToggled={switcher}
          onChange={this.handleSwitcher}
        />

        <SubmitButton />
      </form>
    );
  }
}
*/
