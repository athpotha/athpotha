import { useState } from 'react';
import { useRef } from 'react';

const UseImageInput = () => {
    const fileInput = useRef();
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImageData(file);
        // const imageData = new FormData();
        // imageData.append('imageFile', file);
        setImagePreview(URL.createObjectURL(file));
    };

    return {
        handleUploadClick,
        imagePreview,
        fileInput,
        imageData
    }
}

export default UseImageInput;