import { destroyCookie } from "nookies"
import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils"

export default function Dashboard() {
  const { user, signOut, isAuthenticated } = useContext(AuthContext)

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  })

  useEffect(() => {
    api.get('/me')
    .then(response => {console.log(response)})
  }, [])

  return(
    <>
    <h1>Dashboard {user?.email}</h1>

    <button onClick={signOut}>Sign Out</button>
    <Can permissions={['metrics.list']}>
      <div>Métricas baby</div>
    </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me')
  
  return {
    props: {}
  }
})