import DeleteButton from "@/app/components/deletePost"
import { FC } from "react"

interface pageProps {
    params: {slug: string}
}

const page: FC<pageProps> = ({params}) => {
 
   
    return (
        <div className="h-screen w-full flex justify-center items-center gap-4">
            
            <h1>Post numero: {params.slug}</h1>
            <DeleteButton PostId={params.slug}/>
        </div>
    )
}

export default page