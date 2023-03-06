import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'Api';
import { toast } from 'react-hot-toast';
import { ActorList, ActorItem, Img } from './CastStyles';

const Cast = () => {
  const { id } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getActors() {
      try {
        const results = await getMovieCredits(id);
        const actor = results.cast.map(item => {
          return {
            id: item.id,
            name: item.name,
            img: item.profile_path,
            character: item.character,
          };
        });

        setActors(actor);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getActors();
  }, [id]);
  return (
    <div>
      <ActorList>
        {actors.map(a => {
          return (
            <ActorItem key={a.id}>
              {a.img ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w500${a.img}`}
                  alt={a.name}
                  width={120}
                />
              ) : (
                <Img
                  src={`https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg`}
                  alt={a.name}
                  width={120}
                />
              )}
              <div>
                <h3>{a.name}</h3>
                <p>
                  <i>{a.character}</i>
                </p>
              </div>
            </ActorItem>
          );
        })}
      </ActorList>
    </div>
  );
};

export default Cast;
