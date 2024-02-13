

interface PostProps {
    id: number; 
    title: string;
    content: string | null;
    author: string | null;
  }

const CardPost:React.FC<PostProps>= ({ id, title, content, author }) => {
    return (
        
        <div className="bg-yell w-full h-[45%] text-grayBlack shadow-xl shadow-primary p-2 rounded-bl-2xl">
            
            <h2 className="text-2xl font-bold text-center ">{title}</h2>
            
            <div className="flex flex-col justify-between items-center h-[80%] overflow-hidden">
                <p className="my-4 w-[90%] truncate h-8 ">{content || "contenu non disponible"}</p>   
                <p className="text-sm text-right">écrit par: {author}</p>
            </div>
        </div>
       
    )
}

export default CardPost