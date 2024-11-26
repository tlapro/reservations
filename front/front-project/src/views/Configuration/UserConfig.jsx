import { useState } from 'react';
import ProfilePictureForm from '../../components/UploadPhoto/UploadPhoto';

const UserSettings = ({ onPhotoUpdate }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Foto de perfil actualizada.");
        onPhotoUpdate(data.imageUrl); // Actualizar la foto de perfil en el estado global o navbar
      } else {
        alert(data.message || "Error al subir la imagen.");
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Ocurrió un error. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      < ProfilePictureForm />
    </div>
  );
};

export default UserSettings;
