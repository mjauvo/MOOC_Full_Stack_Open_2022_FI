const Notification = ({type, message}) => {
    if (message === null) {
        return null
    }
    else {
        return (
            <div id="notification" className={type}>
                <p><strong>{message}</strong></p>
            </div>
        )
    }
}

export default Notification