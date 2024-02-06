import React, { useState } from 'react';
import Form from './components/Form/Form';

const MovieTemplate = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('Film');
  const [year, setYear] = useState('2024');
  const [directed, setDirected] = useState('Jackson');
  const [starring, setStarring] = useState('Actors');
  const [music, setMusic] = useState('Artur');
  const [text, setText] = useState('Lorem Lorem Lorem Lorem Lorem Lorem');

  const [bgcolor, setBgcolor] = useState('#F2CC8A');
  const [textColor, setTextColor] = useState('#000000');

  const handleColorChange = (color) => {
    setBgcolor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handlerTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlerYear = (e) => {
    setYear(e.target.value);
  };

  const handlerDirected = (e) => {
    setDirected(e.target.value);
  };

  const handlerStarring = (e) => {
    setStarring(e.target.value);
  };

  const handlerMusic = (e) => {
    setMusic(e.target.value);
  };

  const handlerText = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex lg:justify-between justify-center lg:gap-[10px] gap-[30px] flex-wrap mr-[5%] ml-[5%]">
      <div
        className="lg:max-w-[500px] max-w-[380px] lg:p-[30px] p-[10px] rounded-lg lg:border-none border-[2px] border-black"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="flex justify-between" style={{ color: textColor }}>
          <div>colors</div>
          <p
            className="text-lg border-[2px] border-black p-[2px] "
            style={{ color: textColor }}
          >
            {year}
          </p>
        </div>
        <h1 className="text-[60px] font-bold" style={{ color: textColor }}>
          {title}
        </h1>
        <div
          className="w-full h-[300px] lg:h-[500px] bg-black flex justify-center items-center"
          style={{ color: textColor }}
        >
          {image && (
            <img src={image} alt="Uploaded" className="w-full h-full" />
          )}
        </div>
        <div className="flex gap-[30px] mt-[15px]">
          <div className="w-1/2 ">
            <h2
              className="mt-[15px] text-xl font-bold"
              style={{ color: textColor }}
            >
              Directed by {directed}
            </h2>
            <div className="mt-[10px]">
              <p className="font-semibold" style={{ color: textColor }}>
                Starring {starring}{' '}
              </p>
              <p className="font-semibold" style={{ color: textColor }}>
                Music by {music}
              </p>
            </div>
          </div>
          <p className="w-1/2 text-sm" style={{ color: textColor }}>
            {text}
          </p>
        </div>
      </div>
      <Form
        handleImageChange={handleImageChange}
        handlerTitle={handlerTitle}
        handlerYear={handlerYear}
        handlerDirected={handlerDirected}
        handlerStarring={handlerStarring}
        handlerMusic={handlerMusic}
        handlerText={handlerText}
        bgcolor={bgcolor}
        handleColorChange={handleColorChange}
        textColor={textColor}
        handleTextColorChange={handleTextColorChange}
      />
    </div>
  );
};

export default MovieTemplate;
