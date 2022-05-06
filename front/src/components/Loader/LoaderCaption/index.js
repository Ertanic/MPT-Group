import {AutoMap} from '../../../utils/elementsArrayMapping';

export default function LoaderCaption(props) {
    const {children} = props;

    return (
        <span className="loader_caption" {...props}>
            { AutoMap(children) }
        </span>
    )
}