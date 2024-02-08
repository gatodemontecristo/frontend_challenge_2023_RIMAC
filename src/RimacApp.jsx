import { AuthProvider } from "./registro/context"
import { AppRouter } from "./router/AppRouter"

export const RimacApp = () => {
  return (
    <AuthProvider>
    <AppRouter></AppRouter>
    </AuthProvider>
  )
}
