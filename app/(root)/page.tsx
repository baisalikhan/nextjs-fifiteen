

async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if (!response.ok) throw new Error("Failed to fetch albums");
  const albums = await response.json();

  return (
      <div className="grid">
        {albums.map((album: {id: number, title: string}) => {
          return (
              <div key={album.id} className={'border p-2 m-3'}>
                <p>Album ID: {album.id}</p>
                <h3 className={'text-lg'}>{album.title}</h3>
              </div>
          );
        })}
      </div>
  );
}

export default Home;
