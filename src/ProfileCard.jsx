function ProfileCard({ titulo, handle, url, precio, tituloStyle }) {
  return (
    <div>
      <h2 style={tituloStyle}>{titulo}</h2>
      <p>{handle}</p>
      <img src={url} alt={titulo} />
      {precio && <p>{precio}</p>}
    </div>
  );
}

export default ProfileCard;