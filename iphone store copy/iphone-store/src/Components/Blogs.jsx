export default function Blogs(props) {
    const { header, paragraph, image } = props.blogs_data

    return (
        <div>
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <img src={image} alt="Image" />
        </div>
    )
}