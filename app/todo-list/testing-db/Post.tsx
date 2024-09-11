export default function Post({id, title, content, authorName}: {id: string; title: string; content: string; authorName: string}) {
    return (
        <div className="post border-spacing-1">
            <h3>{authorName}</h3>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}