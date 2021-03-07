import { makeStyles } from '@material-ui/core/styles'
import { ImportantDevices } from '@material-ui/icons'
import fullLogo from './../assets/fullLogo.png'
import { Divider, Typography } from '@material-ui/core'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 'fit-content',
    borderRadius: '10px',
    left: '0px',
    background: `#f8ffef`,
    textAlign: 'center',
  },
  info: {
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  hr: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${COLORS.col4}, rgba(0, 0, 0, 0))`,
    height: '2px',
    margin: 'auto',
  },
}))

function YevaCureFooter() {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <img src={fullLogo} alt="full-logo" height={200} />
      <div className={classes.info}>
        <Divider className={classes.hr} />
        <Typography variant="overline">Add ICONS here</Typography>
      </div>
    </div>
  )
}

export default YevaCureFooter
