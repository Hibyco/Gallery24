import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Album from "./Album";
import AlbumForm from "./AlbumForm";

interface Photo {
    id: string;
    url: string;
    albumId: string;
}

interface Album {
    id: string;
    name: string;
}

const App: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [albums, setAlbums] = useState<Album[]>([
        { id: "1", name: "Основное" },
        { id: "2", name: "Скриншоты" },
    ]);

    const addPhoto = (url: string, albumId: string) => {
        const newPhoto: Photo = {
            id: Math.random().toString(36).substring(7),
            url,
            albumId,
        };
        setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    };

    const addAlbum = (name: string) => {
        const newAlbum: Album = {
            id: Math.random().toString(36).substring(7),
            name,
        };
        setAlbums((prevAlbums) => [...prevAlbums, newAlbum]);
    };
    
    const headStyles: React.CSSProperties = {
        textAlign: "center",
        backgroundColor: "#ffd381",
        padding: "20px",
        marginTop: "0px",
    };

    return (
        <div>
            <h1 style={headStyles}>Галерея фотографий</h1>
            <AlbumForm addAlbum={addAlbum} />
            <UploadForm albums={albums} addPhoto={addPhoto} />
            {albums.map((album) => (
                <Album key={album.id} album={album} photos={photos.filter(photo => photo.albumId === album.id)} />
            ))}
        </div>
    );
};

export default App;
