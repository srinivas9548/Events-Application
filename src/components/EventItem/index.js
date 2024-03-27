import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEventItem, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    onClickEventItem(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
