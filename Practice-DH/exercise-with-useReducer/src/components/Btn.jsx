

// eslint-disable-next-line react/prop-types
const Btn = ({ dispatch, type, label, className }) => {
    return (
        <button className={className} type='button' onClick={() => dispatch({ type })}>{label}</button>
    )
}

export default Btn