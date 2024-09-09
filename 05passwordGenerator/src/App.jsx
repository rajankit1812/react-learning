import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          {/* onChange: This is an event handler that triggers every time the slider thumb is moved, i.e., whenever the value of the input changes.
(e) => { setLength(e.target.value) }: This is an inline arrow function that updates the length state with the new value of the slider.
e: The event object that contains information about the change event.
e.target.value: The new value of the slider, which is retrieved from the event target (i.e., the slider input element).
setLength(e.target.value): This function call updates the length state with the new value, causing the component to re-render with the updated length. */}
          <label>length: {length}</label>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="charInput">Character</label>
      </div>
    </div>
  );
}

export default App;
