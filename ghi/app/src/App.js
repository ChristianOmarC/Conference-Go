import Nav from './Nav'
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';

function App(props) {

  const { attendees } = props

  if (props.attendees === undefined) {
    return null;
  }
  return (
    <><Nav />
    <div className="container"></div>
    <ConferenceForm />
    {/* <LocationForm /> */}
    {/* <AttendeesList attendees={props.attendees}/> */}
    </>
  )
}

export default App
