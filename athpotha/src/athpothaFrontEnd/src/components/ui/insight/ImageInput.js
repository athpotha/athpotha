import React from 'react'

function ImageInput() {
    const fileInput = useRef();
    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImageData(file);
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setImagePreview(URL.createObjectURL(file));
    };
    return (
        <input
            accept="image/*"
            ref={fileInput}
            multiple
            type="file"
            onChange={handleUploadClick}
            style={{ display: "none" }}
        />
    )
}

export default ImageInput