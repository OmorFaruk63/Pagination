import './Pagination.css'

const Pagination = ({ postPerPage, totalPost, showPost }) => {
    const pagenum = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pagenum.push(i);
    }
    return (
        <ul className='pagination'>
            {pagenum.map((number, i) => (
                <li onClick={() => showPost(number)} key={i}>
                    <a href="!#">{number}</a>
                </li>
            ))}
        </ul>
    )
}

export default Pagination