import React, { useState } from "react";

interface UploadFormProps {
    albums: { id: string; name: string }[];
    addPhoto: (url: string, albumId: string) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ albums, addPhoto }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedAlbum, setSelectedAlbum] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleAlbumChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAlbum(event.target.value);
    };

    const handleUpload = async () => {
        if (selectedFile && selectedAlbum) {
            const url = URL.createObjectURL(selectedFile);
            addPhoto(url, selectedAlbum);
            setSelectedFile(null);
            setSelectedAlbum("");
        }
    };

    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
    };

    const buttonStyles: React.CSSProperties = {
        padding: "10px 20px",
        backgroundColor: "#ffd381",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    };

    const inputStyles: React.CSSProperties = {
        margin: "10px 0",
    };

    return (
        <div>
            <form style={styles}>
                <input type="file" onChange={handleFileChange} style={inputStyles} />
                <select value={selectedAlbum} onChange={handleAlbumChange} style={inputStyles}>
                    <option value="">Выберите альбом</option>
                    {albums.map((album) => (
                        <option key={album.id} value={album.id}>
                            {album.name}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={handleUpload} style={buttonStyles}>Загрузить</button>
            </form>
        </div>
    );
};

export default UploadForm;
