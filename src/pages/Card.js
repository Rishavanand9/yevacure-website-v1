import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: '100px',
    background: 'rgba(51, 51, 51, 0.5)',
    color: 'white',
    position: 'fixed',
    boxShadow:
      '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
    '&:hover': {
      boxShadow: '0 35px 20px #777',
    },
  },
}))

function Card(props) {
  const classes = useStyles(),
    { children, isStyled } = props
  return <Paper className={classes.paper}>{children}</Paper>
}

export default Card
