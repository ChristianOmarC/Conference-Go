import Nav from './Nav'
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';

function App(props) {

  const { attendees } = props

  if (props.attendees === undefined) {
    return null;
  }
  return (
    <><Nav />
    <div className="container"></div>
    <ConferenceForm />
    {/* <AttendConferenceForm /> */}
    {/* <LocationForm /> */}
    {/* <AttendeesList attendees={props.attendees}/> */}
    </>
  )
}

export default App
