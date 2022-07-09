import classes from './Error.module.css'

const Error = ({children}) => {
    return(
        <div className={classes.Error}>
            <div>City not found!</div>
            {children}
        </div>
    )
}

export default Error;