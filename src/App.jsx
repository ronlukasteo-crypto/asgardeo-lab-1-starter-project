import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import EmployeeMgmt from './pages/EmployeeMgmt'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'

function App() {
  return (
    <>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/employee-mgmt"
              element={
                <>
                  <SignedIn>
                    <EmployeeMgmt />
                  </SignedIn>
                  <SignedOut>
                    <p>Please sign in to view this page.</p>
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </Router>

        <header>
          <SignedIn>
            <UserDropdown />
            <SignOutButton />
            <User>
                {(user) => (
                  <div>
                    <p>Welcome back, {user.userName || user.username || user.sub}</p>
                  </div>
                )}
          </User>
          <UserProfile />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </header>
      </main>
    </>
  )
}

export default App
