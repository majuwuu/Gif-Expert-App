import React, {useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  
    const [images, setimages] = useState([]);

  useEffect(() => {
      getGifs();
  }, [])


  const getGifs = async() => {
  
    const url = "http://api.giphy.com/v1/gifs/search?q=xd&limit=10&api_key=VHrLX3n4BOVPCNLh8zmsUiOvEJcVp5S6";
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
        }

    })

      console.log(gifs);
      setimages(gifs);
  }

  return (
    <div>
        <h3> { category } </h3>
          {
            images.map( (img) => (
             <GifGridItem 
                key={img.id}
                img={ img } 
             />
            ))
          }
    </div>
  )


}
