import { useEffect, useState } from 'react';

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [image, setImage] = useState();
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.memegen.link/templates';

  useEffect(() => {
    if (isLoading) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data && !data.error) {
            setAllImages(data);
            console.log('in data');
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('in error');
        })
        .finally(() => {
          console.log('done fetching...');
        });
    }
  }, [isLoading]);

  function selectRandomImage() {
    setImage(allImages[Math.floor(Math.random() * allImages.length)]['blank']);
  }

  function handleButtonClick() {
    setIsLoading(true);
  }

  function handleTopTextChange(e) {
    setTopText(e.target.value);
  }

  function handleBottomTextChange(e) {
    setBottomText(e.target.value);
  }

  return (
    <>
      <h1>React Meme Generator</h1>
      <ol>
        <li>click Download to get pictures</li>
        <li>click Get random image to get random images</li>
        <li>enter top and bottom text</li>
      </ol>
      <img src={image} alt="here pops the pic" />
      <hr />
      <button disabled={isLoading} onClick={handleButtonClick}>
        Download
      </button>
      <hr />
      <button onClick={selectRandomImage}>Get random image</button>
      <hr />
      <label htmlFor="topText">Top-text: </label>
      <input id="topText" onChange={handleTopTextChange} />
      <p id="p1">{topText}</p>
      <label htmlFor="bottomText">Bottom-text: </label>
      <input id="bottomText" onChange={handleBottomTextChange} />
      <p id="p2">{bottomText}</p>
    </>
  );
}
