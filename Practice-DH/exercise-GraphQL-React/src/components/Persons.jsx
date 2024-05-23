/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Persons = ({ persons }) => {
    console.log(persons)
    return (
    <div>
        <h2>Persons</h2>
        {persons.map(p => {
            return <div key={p.name}>
                {p.name} - {p.phone === null ? 'Not found' : p.phone}
            </div>
        })}
    </div>)
}

export default Persons