// Components
import LoaderCaption from './LoaderCaption';

// Assets
import Img from "../../assets/LoaderImage.jpg";
import S from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={S.loader_container}>
            <img className={S.loader_img} src={Img} alt="Изображение Молоткова в виде загрузчика"/>
            <LoaderCaption className={S.loader_caption}>Пожайлуста, подождите...</LoaderCaption>
        </div>
    )
}