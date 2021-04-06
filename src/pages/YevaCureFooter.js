import { makeStyles } from '@material-ui/core/styles'
import { ImportantDevices } from '@material-ui/icons'
import fullLogo from './../assets/fullLogo.png'
import iso from './../assets/Footer/iso.png'
import mii from './../assets/Footer/mii.png'
import { Divider, Typography, Grid } from '@material-ui/core'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 'fit-content',
    borderRadius: '10px',
    left: '0px',
    background: 'rgb(164 158 247 / 10%)',
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
  address: {
    margin: '20px',
    width: 'fit-content',
    textAlign: 'left',
  },
  icons: {
    margin: '4em',
    width: 'fit-content',
  },
  img: {
    margin: '16px',
  },
}))

function YevaCureFooter() {
  const classes = useStyles()

  const Address = (
    <div className={classes.address}>
      <Typography variant={'h6'}>Office Address</Typography>
      <br />
      <Typography>Plot No. 4/4, A-115</Typography>
      <Typography>1st Floor, Rajhans Plaza, Ahinsa Khand-1</Typography>
      <Typography>Indrapuram, Ghaziabad</Typography>
      <Typography>UP - 201014, India</Typography>
    </div>
  )

  const Contact = (
    <div className={classes.address}>
      <Typography variant={'h6'}>Contact Details</Typography>
      <br />
      <Typography>
        <b>Landline</b>: 0120-4223763 &nbsp; &nbsp;{' '}
        <a href="tel:+9101204223763">
          <i
            class="fa fa-mobile-phone"
            style={{ 'font-size': '30px', color: 'green' }}
          ></i>
        </a>
      </Typography>
      <Typography>
        <b>Email</b>: yevacurepharmaceuticals@gmail.com &nbsp; &nbsp;{' '}
        <a href="mailto:yevacurepharmaceuticals@gmail.com">
          <i
            class="fa fa-envelope"
            style={{ 'font-size': '20px', color: 'green' }}
          ></i>
        </a>
      </Typography>
    </div>
  )

  const Images = (
    <div className={classes.icons}>
      <img src={mii} height={50} className={classes.img} />
      <img src={iso} height={50} className={classes.img} />
    </div>
  )

  return (
    <div className={classes.footer}>
      <img src={fullLogo} alt="full-logo" height={200} />
      <div className={classes.info}>
        <Divider className={classes.hr} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
            {Address}
          </Grid>
          <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
            {Images}
          </Grid>
          <Grid item xs={12} sm={12} lg={4} xl={4} md={4}>
            {Contact}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default YevaCureFooter
