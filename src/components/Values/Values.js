import React from 'react'
import './Values.css'
import { Grid } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

const valuesData = [
  {
    title: 'Best Quality',
    color: '#419147',
    description:
      'We manufacture the quality that is best in the industry through constant creative research and challenges.',
  },
  {
    title: 'One Company',
    color: '#262d7d',
    description:
      'The authenticity of products lies in complete control over manufacturing right from procurement till shipment.',
  },
  {
    title: 'Rich Manufacturing & Marketing Concept',
    color: '#419147',
    description:
      'Highly Skilled staff constantly thinks about designing the apt manufacturing and marketing strategies of the products.',
  },
  {
    title: 'People Before Profit',
    color: '#262d7d',
    description:
      'We stay as a life-long companion of our customer by being considerate towards them.',
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
