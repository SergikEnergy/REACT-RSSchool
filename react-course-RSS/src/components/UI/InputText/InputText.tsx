import React from 'react';

import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

import './inputText.css';

interface IInputTextProps {
  errors: FieldErrors<FieldValues>;
  rest: UseFormRegisterReturn;
  type: string;
  id: string;
  placeholder: string;
}

export default function InputText(props: IInputTextProps) {
  console.log(props);
  const { type, placeholder, id, errors, rest } = props;

  console.log(errors);
  // const errorBlock = error ? (
  //   <div className="error-name error-box" data-testid="errorInputId">
  //     {error}
  //   </div>
  // ) : (
  //   ''
  // );

  return (
    <div className="name-box">
      <p className="name__label">{rest.name}</p>
      <input
        data-testid="testInputText"
        // accept={accept}
        type={type}
        className={`name_input ${
          errors[rest.name]?.message ? 'error-field' : ''
        }`}
        id={id}
        name={rest.name}
        placeholder={placeholder}
        onChange={(event) => {
          rest.onChange(event);
          console.log(event);
        }}
      />
      <div className="error-name error-box" data-testid="errorInputId">
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

// export default class InputText extends Component<InputTextProps, unknown> {
//   render() {
//     const {
//       type,
//       value,
//       refTo,
//       id,
//       placeholder,
//       onChange,
//       name,
//       error,
//       label,
//       accept,
//     } = this.props;
//     const errorBlock = error ? (
//       <div className="error-name error-box" data-testid="errorInputId">
//         {label.toLowerCase()} should be not empty
//       </div>
//     ) : (
//       ''
//     );

//     return (
//       <div className="name-box">
//         <p className="name__label">{label}</p>
//         <input
//           data-testid="testInputText"
//           accept={accept}
//           type={type}
//           ref={refTo}
//           className={`name_input ${error ? 'error-field' : ''}`}
//           id={id}
//           name={name}
//           value={value}
//           placeholder={placeholder}
//           onChange={onChange}
//         />
//         {errorBlock}
//       </div>
//     );
//   }
// }
