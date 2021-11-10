import React, { Fragment } from 'react';
import {gql, useQuery} from "@apollo/client"
import Error from "../../components/Error"
import Loader from "../../components/Loader"
import Rocket from "../../components/Rocket"

const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($rocketId: ID!)
{
  rocket(id: $rocketId) {
    name
    height {
      feet
      meters
    }
    cost_per_launch
    diameter {
      feet
      meters
    }
    stages
    engines {
      number
      type
      propellant_1
      propellant_2
      thrust_to_weight
    }
  }
}
`

const RocketPage = ({ match }) => {
    const rocketId = match.params.id

    const {data, loading, error} = useQuery(GET_ROCKET_INFO, {
        variables: {rocketId}
    })
    if (loading) return <Loader />
    if (error) return <Error error={error} />
    console.log(data.rocket.name)
    return <Rocket rocket={{...data.rocket, id:rocketId}} />;
};

export default RocketPage;
