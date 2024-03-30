
const TransformedImage = ({image,type,title,isTransforming,setIsTransforming,transformationConfig,hasDownload=false}:TransformedImageProps) => {

   const downloadHandler = () => {}

    return(
        <div className="flex flex-col gap-4">
             <div className="flex-between">
                <h3 className="h3-bold text-dark-600">
                    Transformed
                </h3>
                {hasDownload && (
                    <button 
                    className="download-btn" 
                    onClick={downloadHandler}>
                        Download
                    </button>
                )}
             </div>
        </div>
    )
}
export default TransformedImage;