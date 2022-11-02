import React from 'react';
import { fetchImg } from './API/API.js';
import { Button } from './Button/Button.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
import { Loader } from './Loader/Loader.jsx';
import { Modal } from './Modal/Modal.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import style from './App.module.css';


export const App = () => {


  return (
    <div className={style.wrapper}>
      React homework template
    </div>
  );
};
