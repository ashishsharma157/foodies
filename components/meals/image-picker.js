"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
        setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.constrols}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="Image selected by user" fill />
            )}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
