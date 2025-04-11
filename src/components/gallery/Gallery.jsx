import GalleryItem from "../galleryItem/GalleryItem";
import "./gallery.css";

// TEMP
const items = [
    { id: 1, media: "/pins/pin1.jpeg", width: 1260, height: 1000 },
    { id: 2, media: "/pins/pin2.jpeg", width: 1080, height: 1350 },
    { id: 3, media: "/pins/pin3.jpeg", width: 1200, height: 800 },
    { id: 4, media: "/pins/pin4.jpeg", width: 800, height: 1200 },
    { id: 5, media: "/pins/pin5.jpeg", width: 1024, height: 1024 },
    { id: 6, media: "/pins/pin6.jpeg", width: 1440, height: 900 },
    { id: 7, media: "/pins/pin7.jpeg", width: 1280, height: 720 },
    { id: 8, media: "/pins/pin8.jpeg", width: 1600, height: 1000 },
    { id: 9, media: "/pins/pin9.jpeg", width: 900, height: 1600 },
    { id: 10, media: "/pins/pin10.jpeg", width: 1000, height: 1500 },
    { id: 11, media: "/pins/pin11.jpeg", width: 1500, height: 1000 },
    { id: 12, media: "/pins/pin12.jpeg", width: 950, height: 1250 },
    { id: 13, media: "/pins/pin13.jpeg", width: 1350, height: 1080 },
    { id: 14, media: "/pins/pin14.jpeg", width: 720, height: 1280 },
    { id: 15, media: "/pins/pin15.jpeg", width: 1100, height: 1100 },
    { id: 16, media: "/pins/pin16.jpeg", width: 1000, height: 1600 },
    { id: 17, media: "/pins/pin17.jpeg", width: 1600, height: 900 },
    { id: 18, media: "/pins/pin18.jpeg", width: 960, height: 1440 },
    { id: 19, media: "/pins/pin19.jpeg", width: 1280, height: 960 },
    { id: 20, media: "/pins/pin20.jpeg", width: 1024, height: 768 },
    { id: 21, media: "/pins/pin21.jpeg", width: 1366, height: 768 },
    { id: 22, media: "/pins/pin22.jpeg", width: 1152, height: 864 },
    { id: 23, media: "/pins/pin23.jpeg", width: 1680, height: 1050 },
    { id: 24, media: "/pins/pin24.jpeg", width: 1920, height: 1080 },
    { id: 25, media: "/pins/pin25.jpeg", width: 800, height: 600 },
  ];
  

const Gallery = () => {
    return (
        <div className="gallery">
            {
                items.map(item => (
                    <GalleryItem key={item.id} item={item}></GalleryItem>
                ))
            }
        </div>
    );
};

export default Gallery;