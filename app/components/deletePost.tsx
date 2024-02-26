'use client'
import { useRouter } from "next/navigation";

export default function DeleteButton({ PostId }: any) {
    const router = useRouter();

    async function handleClick() {
        
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce post ?");
      
        if (isConfirmed) {
            try {
                await fetch(`/api/posts/${PostId}`, {
                    method: 'DELETE'
                });
               
               router.push('/board/post');
                
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <button
            className="text-4xl font-bold bg-tertiary text-cloud p-2 rounded-xl mr-6 hover:bg-alert"
            onClick={handleClick}
        >
            X
        </button>
    );
}