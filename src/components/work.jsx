export default function Work(props) {
    return (
        <div className="work-card">
            <h3 className="work-title">{props.title}</h3>
            <p className="work-id">{props.id}</p>
            <p className="work-abstract">{props.abstract}</p>
        </div>
    )
}