import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import { getMovieReviews } from 'services/Api';
import { Container } from './ReviewsStyles';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getActors() {
      try {
        const data = await getMovieReviews(id);

        const review = data.results.map(item => {
          return {
            id: item.id,
            author: item.author,
            content: item.content,
          };
        });

        setReviews(review);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getActors();
  }, [id]);
  // eslint-disable-next-line no-lone-blocks
  {
    if (reviews.length === 0) {
      return <p>We don't have any reviews for this movie.</p>;
    }
  }
  return (
    <Container>
      <ul>
        {reviews.map(a => {
          return (
            <li key={a.id}>
              <h3>{a.author}</h3>
              <p>{a.content}</p>
            </li>
          );
        })}
      </ul>
    </Container>
    //     <div>
    //       <ActorList>
    //         {actors.map(a => {
    //           return (
    //             <ActorItem key={a.id}>
    //               {a.img ? (
    //                 <Img
    //                   src={`https://image.tmdb.org/t/p/w500${a.img}`}
    //                   alt={a.name}
    //                   width={120}
    //                 />
    //               ) : (
    //                 <Img
    //                   src={`https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg`}
    //                   alt={a.name}
    //                   width={120}
    //                 />
    //               )}
    //               <div>
    //                 <h3>{a.name}</h3>
    //                 <p>
    //                   <i>{a.character}</i>
    //                 </p>
    //               </div>
    //             </ActorItem>
    //           );
    //         })}
    //       </ActorList>
    //     </div>
  );
};

export default Reviews;
