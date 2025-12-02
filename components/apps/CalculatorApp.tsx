import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handlePress = (val: string) => {
    if (val === 'C') {
      setDisplay('0');
      setEquation('');
    } else if (val === '=') {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(equation.replace('×', '*').replace('÷', '/'));
        setDisplay(String(result));
        setEquation(String(result));
      } catch {
        setDisplay('Error');
        setEquation('');
      }
    } else if (['+', '-', '×', '÷'].includes(val)) {
      setEquation(equation + (val === '×' ? '*' : val === '÷' ? '/' : val));
      setDisplay(val);
    } else {
      if (display === '0' || ['+', '-', '×', '÷'].includes(display)) {
        setDisplay(val);
      } else {
        setDisplay(display + val);
      }
      setEquation(equation + val);
    }
  };

  const buttons = [
    'C', '(', ')', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="h-full bg-[#f3f3f3] dark:bg-[#202020] flex flex-col p-1">
      <div className="flex-1 flex flex-col justify-end items-end p-4 mb-1">
        <div className="text-gray-500 text-sm h-6">{equation}</div>
        <div className="text-4xl font-semibold text-gray-900 dark:text-white">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handlePress(btn)}
            className={`
              h-12 rounded hover:bg-white dark:hover:bg-[#323232] transition-colors text-sm font-medium
              ${btn === '=' ? 'bg-blue-500 hover:bg-blue-600 text-white col-span-2' : 'bg-[#f9f9f9] dark:bg-[#2c2c2c] text-black dark:text-white'}
              ${['C', '(', ')', '÷', '×', '-', '+'].includes(btn) ? 'bg-[#f3f3f3] dark:bg-[#202020]' : ''}
            `}
            style={btn === '=' ? { gridColumn: 'span 2' } : {}}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorApp;
