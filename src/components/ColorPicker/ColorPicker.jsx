import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker({ bgcolor, handleColorChange }) {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className="flex lg:justify-between lg:flex-row flex-row-reverse justify-end items-center gap-[5px] relative">
      <h3 className="text-xl font-semibold">Background Color</h3>
      <div
        className="lg:w-[60px] lg:h-[20px] w-[50px] h-[50px] rounded-xl lg:rounded-none border-[1px] border-black cursor-pointer"
        style={{
          backgroundColor: bgcolor,
        }}
        onClick={togglePicker}
      />
      {showPicker && (
        <SketchPicker
          color={bgcolor}
          onChangeComplete={handleColorChange}
          className="absolute top-[35px]"
        />
      )}
    </div>
  );
}

export default ColorPicker;
