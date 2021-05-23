const Button = ({title, color}) => {
    return(
        <button style={{backgroundColor: color, color: 'white'}} className='btn'>{title}</button>
    )
}

Button.defaultProps = {
    backgroundColor: 'red',
    title: 'Add'
}

export default Button;