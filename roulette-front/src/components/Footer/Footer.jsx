import Github from '../../assets/github-logo.png'

const Footer = () => {
  return (
    <div className='Footer'
      style={{
        width: "100%",
        height: "50px",
        position: "relative", 
        transform: "translateY(-0%)",
        backgroundColor: "#EAEAEA",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <p style={{
        margin: "0px",
        paddingLeft: "20px",
      }}>@ Roulette-avengers </p>
      <a href='https://github.com/rollet-avengers' target='_blank'>
        <img src={Github} style={{
          width: "30px",
          height: "70%",
          paddingTop: "5px",
          paddingRight: "30px",
        }}/>
      </a>
    </div>
  )
}

export default Footer
