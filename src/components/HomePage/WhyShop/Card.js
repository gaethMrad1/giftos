function Card({iconClass, title, desc}) {
  return (
    <div className="card">
        <i className={iconClass}></i>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Card