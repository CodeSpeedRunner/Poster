import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import ColorPickerText from '../ColorPickerText/ColorPickerText';

const Form = ({
  handleImageChange,
  handlerTitle,
  handlerDirected,
  handlerStarring,
  handlerYear,
  handlerMusic,
  handlerText,
  bgcolor,
  handleColorChange,
  textColor,
  handleTextColorChange,
}) => {
  return (
    <div className="bg-slate-200 p-[15px] rounded-lg w-full lg:w-[800px] lg:m-0 mr-[5%] ml-[5%]">
      <h2 className="text-[60px] font-bold lg:block hidden">
        Customize Movie Poster
      </h2>
      <div className="flex lg:flex-col flex-col-reverse lg:w-[400px] mr-auto ml-auto">
        <div className="flex gap-[10px] mb-[25px] lg:flex-row flex-col">
          <h3 className="lg:text-2xl text-lg font-semibold text-center">
            Upload Artwork
          </h3>
          <input
            type="file"
            onChange={handleImageChange}
            className="border-none p-[10px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] lg:mt-0 mt-[50px]">
          <h3 className="text-2xl font-semibold text-center">Enter Text:</h3>
          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Movie Title
            </label>
            <input type="text" onChange={handlerTitle} />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Directed By
            </label>
            <input type="text" onChange={handlerDirected} />
          </div>

          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Starring
            </label>
            <input type="text" onChange={handlerStarring} />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Last Line
            </label>
            <input type="text" onChange={handlerMusic} />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Synopsis
            </label>
            <textarea rows={7} onChange={handlerText} />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <label className="text-xl font-semibold lg:textleft text-center">
              Realise Year
            </label>
            <input type="text" onChange={handlerYear} />
          </div>
        </div>
        <div className="flex flex-col mt-[25px] lg:gap-0 gap-[15px]">
          <h3 className="text-2xl font-semibold text-center mb-[5px]">
            Choose Color
          </h3>
          <ColorPicker
            bgcolor={bgcolor}
            handleColorChange={handleColorChange}
          />
          <ColorPickerText
            textColor={textColor}
            handleTextColorChange={handleTextColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
