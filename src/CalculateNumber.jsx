import {useState} from 'react';
import axios from 'axios';

function CalculateNumber() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();

    const result = await axios.post(`${process.env.REACT_APP_API_URL}/calculate`, {
      number,
    });

    setResult(result.data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Enter your number</label>
          <input
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default CalculateNumber;
