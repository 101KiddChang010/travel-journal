import '../App.css'

export default function Footer(prop) {
    return (
        <div id="footer">
            <ul className="copyright">
                <li>&copy; Kidd Chang {prop.year}</li>
                <li>
                    Photo by <a href={prop.authorLink} target="_blank">{prop.author}</a> on <a href={prop.imageLink} target="_blank">{prop.website}</a>
                </li>
            </ul>
        </div>
    )
}