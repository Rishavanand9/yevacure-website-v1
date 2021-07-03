import React from 'react'
import { Grid } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'
import './Proficiency.css'
import proficiency from '../../assets/Homepage/proficiency.png'

const ProficiencyList = [
  {
    title: 'Communication and Relationship Management',
    description: '',
    color: '#419147',
  },
  {
    title: 'Leadership & Professionalism',
    description: '',
    color: '#262d7d',
  },
  {
    title: 'Knowledge of the Healthcare Environment',
    description: '',
    color: '#419147',
  },
  {
    title: 'Business Skills and Knowledge',
    description: '',
    color: '#262d7d',
  },
]

function Proficiency(props) {
  //const { width } = props
  //const isMobile = width === 'xs' || width === 'sm ' ? true : false

  const ProficiencyItem = (item) => {
    return (
      <div class="proficiency-content">
        <h2 style={{ color: item.color }}>{item.title}</h2>
      </div>
    )
  }

  return (
    <div class="proficiency-root">
      <h1 class="proficiency-h1">
        <b class="overview-yeva">&bull;</b> Proficiencies{' '}
        <b class="overview-yeva">&bull;</b>
      </h1>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
          <img src={proficiency} class="proficiency-img" alt="proficiency" />
        </Grid>
        <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
          {ProficiencyList.map((item) => {
            return ProficiencyItem(item)
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default withWidth()(Proficiency)
