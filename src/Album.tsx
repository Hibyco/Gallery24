import React from "react";

interface Photo {
    id: string;
    url: string;
}

interface AlbumProps {
    album: { id: string; name: string };
    photos: Photo[];
}

const Album: React.FC<AlbumProps> = ({ album, photos }) => {
    const styles: React.CSSProperties = {
        border: "2px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px 40px",
        backgroundColor: "white",
    };

    const titleStyles: React.CSSProperties = {
        textAlign: "center",
    };

    const imageContainerStyles: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
    };

    const imageStyles: React.CSSProperties = {
        width: "100px",
        margin: "10px",
    };

    return (
        <div style={styles}>
            <h2 style={titleStyles}>{album.name}</h2>
            <div style={imageContainerStyles}>
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.url} alt="Фотография" style={imageStyles} />
                ))}
            </div>
        </div>
    );
};

export default Album;
