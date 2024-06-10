import { NavLink, Outlet } from "react-router-dom";
import '../App.css'

export default function ProfilesPage() {
  const profiles = [1,2,3,4,5];
    return (
      <div>
        {profiles.map((profile)=>(
          <>
            <NavLink className={({isActive})=>{return isActive?'linkStyle':''}} key={profile} to={`/profiles/${profile}`}>
              Profile {profile}
            </NavLink><br/>
          </>
        ))}
        <Outlet/>
      </div>
    );
  }