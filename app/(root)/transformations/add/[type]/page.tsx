import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({params:{type}}:SearchParamProps) => {

    const tranformation = transformationTypes[type]
    return(
        <>
             <Header title={tranformation.title} subtitle={tranformation.subTitle} />
             
             {/* Transformation form */}
             <TransformationForm/>
        </>
    )
}
export default AddTransformationTypePage;