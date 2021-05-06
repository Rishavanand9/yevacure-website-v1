import React from 'react'
import './Values.css'
import values from '../../assets/Homepage/values.png'
import { Grid } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

const valuesData = [
  {
    title: 'Care for health',
    color: '#398139',
    description:
      ' We are guided by our commitment to serve human life. To provide the medical community and patients with the most advanced therapies.',
  },
  {
    title: 'Honesty and Integrity',
    color: '#1256b1',
    description:
      'Our commitment to business ethics, fairness, honesty and transparency is equally important to us, as is to achieving business success.',
  },
  {
    title: 'Innovation',
    color: '#fcde5a',
    description:
      'We believe we can make a difference only by thinking beyond the obvious. Prior to every action we take, we always consider new paths, so as to bring true value to the healthcare community.',
  },
  {
    title: 'Excellence',
    color: '#ed3833',
    description:
      'We always aim high and demand the best from ourselves and our partners. Success does not make us complacent.',
  },
]

function Values(props) {
  const { width } = props
  const isMobile = width === 'xs' || width === 'sm ' ? true : false

  const valueCard = (item) => {
    return (
      <div class="values-content">
        <h4 class="values-h4" style={{ color: item.color }}>
          {item.title}
        </h4>
        <p class="values-p" style={{ color: item.color }}>
          {item.description}
        </p>
      </div>
    )
  }

  return (
    <div class="values-root">
      <h1 class="values-h1">
        <b class="overview-cure">&bull;</b> Our Values{' '}
        <b class="overview-cure">&bull;</b>
      </h1>
      <img
        src={values}
        height={isMobile ? 300 : 400}
        class="values-img"
        alt=""
      />
      <Grid container spacing={2}>
        {valuesData.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              {valueCard(item)}
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default withWidth()(Values)
