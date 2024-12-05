import React, { useState } from "react";

interface AlbumFormProps {
    addAlbum: (name: string) => void;
}

const AlbumForm: React.FC<AlbumFormProps> = ({ addAlbum }) => {
    const [albumName, setAlbumName] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlbumName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (albumName) {
            addAlbum(albumName);
            setAlbumName("");
        }
    };

    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
    };

    const inputStyles: React.CSSProperties = {
        padding: "10px",
        margin: "10px 0px",
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
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

    return (
        <form onSubmit={handleSubmit} style={styles}>
            <input
                type="text"
                value={albumName}
                onChange={handleInputChange}
                placeholder="Название нового альбома"
                style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>Создать альбом</button>
        </form>
    );
};

export default AlbumForm;
