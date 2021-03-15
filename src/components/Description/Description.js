import React from 'react'
import { Grid } from '@material-ui/core'
import './Description.css'

const DescriptionText1 =
  'Yevacure Pharmaceuticals Pvt. Ltd discovers, develops, manufactures and commercializes a diverse portfolio of animal health medicines designed to meet the real-world needs of veterinarians and the livestock farmers.'

function Description() {
  const About = (
    <div class="descriptionText1">
      About Us
      <p>{DescriptionText1}</p>
    </div>
  )

  const Roles = (
    <div class="descriptionText1">
      Our Roles
      <p>
        {' '}
        --> We ensure well-regarded direct sales force in the industry
        <br />
        <br /> --> We address unmet market needs that are important to our local
        customers, and we are continuously improving and expanding our diverse
        portfolio of products to enhance their lifecycles.
        <br /> <br /> --> We maintain high-quality standards to ensure a
        dependable supply for our customers.
      </p>
    </div>
  )

  return (
    <div class="description">
      <Grid container spacing={2} class="descriptionGrid">
        <Grid item md={1} lg={1} xl={1} />
        <Grid item md={10} lg={10} xl={10} sm={12} xs={12}>
          <Grid container>
            <Grid
              item
              md={5}
              lg={5}
              xl={5}
              sm={12}
              xs={12}
              style={{ textAlign: 'center', margin: 'auto' }}
            >
              <img
                src={'https://www.bbcbearings.com/images/about.png'}
                height={200}
              />
            </Grid>
            <Grid item md={7} lg={7} xl={7} sm={12} xs={12}>
              {About}
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              md={5}
              lg={5}
              xl={5}
              sm={12}
              xs={12}
              style={{ textAlign: 'center', margin: 'auto' }}
            >
              <img
                src={
                  'https://www.clipartmax.com/png/full/199-1998454_role-icon-role-based-access-control-icon.png'
                }
                height={200}
              />
            </Grid>

            <Grid item md={7} lg={7} xl={7} sm={12} xs={12}>
              {Roles}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} lg={1} xl={1} />
      </Grid>
    </div>
  )
}

export default Description
