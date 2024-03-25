import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({params:{type}}:SearchParamProps) => {

    const tranformation = transformationTypes[type]
    return(
        <div>
             <Header title={tranformation.title} subtitle={tranformation.subTitle} />
        </div>
    )
}
export default AddTransformationTypePage;