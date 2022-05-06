import NoFoundPage_Image from '../../../assets/404Image.jpg';

export default function NoFoundPage() {
    return (
        <div className="no_found_page_container">
            <img className="no_found_page_image" src={NoFoundPage_Image} alt="No found page image" />
            <span className="no_found_page_code">404</span>
            <span className="no_found_page_caption">Страница не найдена</span>
        </div>
    )
}