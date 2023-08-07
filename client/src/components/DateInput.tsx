import { FC, useEffect, useState } from "react";
import { DataInput, InfoBox } from "./styles";

interface DateInputProps {
  updateBirthDate: (
    dayValue: string,
    monthValue: string,
    yearValue: string
  ) => void;
  showResult2: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Errors {
  day: string | null
  month: string | null
  year: string | null
}

const DateInput: FC<DateInputProps> = ({ updateBirthDate, showResult2 }) => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [error, setError] = useState<Errors>({
    day: null,
    month: null,
    year: null
  });

  useEffect(() => {
    handleDateInput()
  }, [day, month, year])

  function handleDateInput() {
    if (error.day || error.month || error.year) {
      setValidDate(true);
    } else {
      setValidDate(false)
    }
  }
  
  const handleDayChange = (value: string) => {
    if (Number(value) < 1 || Number(value) > 31) {
      setError({...error, day: "red"})
    } else if (Number(value) >= 1 || Number(value) <= 31) {
      setError({...error, day: null})
    }
    setDay(value);
    updateBirthDate(value, month, year);
  };

  const handleMonthChange = (value: string) => {
    if (Number(value) < 1 || Number(value) > 12) {
      setError({...error, month: "red"})
    } else if (Number(value) >= 1 || Number(value) <= 12) {
      setError({...error, month: null})
    }
    setMonth(value);
    updateBirthDate(day, value, year);
  };

  const handleYearChange = (value: string) => {
    if (Number(value) < 1900 || Number(value) > 2023) {
      setError({...error, year: "red"})
    } else if (Number(value) >= 1900 || Number(value) <= 2023) {
      setError({...error, year: null})
    }
    setYear(value);
    updateBirthDate(day, month, value);
  };

  return (
    <>
      <InfoBox>
        <form onSubmit={(e) => showResult2(e)}>
          <h3>¿Cuál es tu fecha de nacimiento?</h3>
          <DataInput
            type="number"
            placeholder="Día*"
            onChange={(e) => handleDayChange(e.target.value)}
            $border={error.day}
            disabled={submitted}
          />
          <DataInput
            type="number"
            placeholder="Mes*"
            onChange={(e) => handleMonthChange(e.target.value)}
            $border={error.month}
            disabled={submitted}
          />
          <DataInput
            type="number"
            placeholder="Año*"
            onChange={(e) => handleYearChange(e.target.value)}
            $border={error.year}
            disabled={submitted}
          />
          <button
            style={{
              position: "absolute",
              border: "none",
              background: "transparent",
            }}
            onClick={() => setSubmitted(true)}
            disabled={validDate}
          ></button>
        </form>
      </InfoBox>
    </>
  );
};

export default DateInput;
