import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

function AuthProtected() {

  let {isAuthenticated,isLoading} = useSelector((state)=>state.auth)

  if(isLoading) return <h1>Loading</h1>

  if(isAuthenticated){
    return <Navigate to="/home" replace />
  }

  return (
    <div>
      <Outlet /> 
    </div>
  )
}

export default AuthProtected
