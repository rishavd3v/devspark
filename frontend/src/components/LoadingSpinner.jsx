export default function LoadingSpinner(){
    return(
        <div className="flex justify-center items-center mt-30 h-screen">
            <div className="animate-spin rounded-full w-20 aspect-square border-t-2 border-b-2 border-gray-900"></div>
        </div>
    )
}