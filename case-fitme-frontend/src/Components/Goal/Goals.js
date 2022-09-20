import keycloak from "../../Keycloak/keycloak";
import WeeklyLists from "./Weekly/List/WeeklyLists";
import Calendar from "./Calendar";
/* Dashboard that contains calendar and goals. */
const Goal = () => {
    return (
        <>
            {keycloak.authenticated && (
                <div>
                    <h1>Dashboard</h1>
                    <Calendar/>
                    <div className="weekly-schedule" id='week-list'>
                        <WeeklyLists />
                    </div>
                </div>
            )}
        </>
    )
}
export default Goal;
