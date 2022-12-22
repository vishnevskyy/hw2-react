const Mission = ({mission}) => {
  return (
      <div>
          <div><h1>{mission.mission_name}</h1></div>
          <div><h1>{mission.launch_year}</h1></div>
          <div><img src={mission.links.mission_patch_small} alt=""/></div>
      </div>
  )
}
export {Mission};