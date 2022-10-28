import { useAppSelector } from "../../hooks";
import { Card } from './Card';
import { CardProps } from "../../types/data";


const Books: React.FC<CardProps> = () => {

  const {books} = useAppSelector((state) => state.books);
  
  return (
    <section className="container">
      <div className='my-5'>
        <div className="flex flex-wrap mt-16">
          {books.map((item, id) => (
            <div key={id} className="basis-[20%] px-5 py-4">
              <Card 
                thumbnail={item?.volumeInfo?.imageLinks?.thumbnail}
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                language={item.volumeInfo.language}
                description={item.volumeInfo.description}
                infoLink={item.volumeInfo.infoLink}
                publishedDate={item.volumeInfo.publishedDate}
                publisher={item.volumeInfo.publisher}
                pageCount={item.volumeInfo.pageCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
};

export { Books };