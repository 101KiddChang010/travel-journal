import '../App.css'

export default function Footer(prop) {
    return (
        <div id="footer">
            <ul className="copyright">
                <li>&copy; Kidd Chang {prop.year}</li>
            </ul>
        </div>
    )
}