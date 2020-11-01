import "./FormInput.scss";
import React from "react";

interface Props {
  [key: string]: string | Function;
  label: string;
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = ({
  onInputChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onInputChange}
        required
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
