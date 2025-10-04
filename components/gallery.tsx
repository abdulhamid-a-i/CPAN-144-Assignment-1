import React from "react";
import { useState } from "react";
import MainContent from "./MainContent";

const fnvtitle ='Welcome to the Fallout: New Vegas Gallery'
const fnvContent = 'Check out the world of Fallout'
const hzdtitle ='Welcome to the Horizon Zero Dawn Gallery'
const hzdContent = 'Check out a world ruled by machines of Hozizon Zero Dawn'

export function RenderGallery() {
    const [selectedGallery, setSelectedGallery] = useState('')

    const handleGalleryChange = (event) => {
        setSelectedGallery(event.target.value);
    };

    const handlePhotoClick = (event) => {
        alert("Description: "+event.target.alt);
    }


    return(
        <div>
            <div style={{
                marginBottom:'10px'
            }}>
                {selectedGallery === 'fnv' &&(
                    <MainContent title={fnvtitle} content={fnvContent}/>
                )}
                {selectedGallery === 'hzd' &&(
                    <MainContent title={hzdtitle} content={hzdContent}/>
                )}
            </div>
            <div id="GallerySelect">
            <label>
                <input onClick={handleGalleryChange} type="radio" name="galleryRadio" value="fnv"/>
                Fallout: New Vegas
            </label>
            <label>
                <input onClick={handleGalleryChange} type="radio" name="galleryRadio" value="hzd"/>
                Horizon Zero Dawn
            </label>
            </div>
            <div>
                {selectedGallery === 'fnv' &&(
                    
                    <div id="gallery">
                    <img onClick={handlePhotoClick} style={{
                         height: 300,
                         width: 500}}
                        src="https://m.media-amazon.com/images/M/MV5BMTA3MjBmZTEtYjNjZC00NzI3LWE0MTEtMzUxNGQ5MGQzYTRhXkEyXkFqcGc@._V1_.jpg"
                        alt="Fallout: New Vegas screenshot showing the Ultra Luxe Resort in game location"></img>
                        <img onClick={handlePhotoClick} style={{
                         height: 300,
                         width: 500}}
                        src="https://m.media-amazon.com/images/M/MV5BMWE0YzA0YTMtNzQ4My00NjQwLWFkMzMtMzU2OTgxOGQzMTc3XkEyXkFqcGc@._V1_.jpg"
                        alt="Fallout: New Vegas concept art"></img>
                    </div>

                )}
                {selectedGallery === 'hzd' &&(
                    <div id="gallery">
                    <img onClick={handlePhotoClick} style={{
                         height: 300,
                         width: 500}}
                        src="https://m.media-amazon.com/images/M/MV5BNjIyZjEwMmMtM2U2MC00NTI2LWIxN2UtM2VmNWFlY2RkODg2XkEyXkFqcGc@._V1_.jpg"
                        alt="Horizon Zero Dawn Screenshot of a machine called a ThunderJaw"></img>
                        <img onClick={handlePhotoClick} style={{
                         height: 300,
                         width: 500}}
                        src="https://m.media-amazon.com/images/M/MV5BZWZjZmZmY2MtMDdmNC00NzhiLWI5NGQtMmI4YzJmY2Y4YWExXkEyXkFqcGc@._V1_.jpg"
                        alt="Photo of Alloy shooting a machine called a Watcher with a bow"></img>
                    </div>

                )}




            </div>





        </div>














    )





}