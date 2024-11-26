import React, { useState } from "react";
import axios from "axios";

const ProfilePictureForm = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await axios.put(`/users/profile-picture/{userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Foto de perfil actualizada", response.data);
      } catch (error) {
        console.error("Error al actualizar la foto de perfil", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Actualizar Foto</button>
    </form>
  );
};

export default ProfilePictureForm;
