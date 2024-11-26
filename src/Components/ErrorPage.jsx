import { useRouteError,Link } from "react-router-dom"

const ErrorPage = () => {
    let err = useRouteError
    console.log(err.status)
  return (
    <div className="error-container">
      <Link to="/"><img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" /></Link>  
    </div>
  )
}

export default ErrorPage
