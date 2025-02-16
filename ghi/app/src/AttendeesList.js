import React, { useEffect, useState } from 'react'

function AttendeesList() {

  const [attendees, setAttendees] = useState([])

  const loadAttendees = async () => {
    const response = await fetch('http://localhost:8001/api/attendees')
    if (response.ok) {
      const data = await response.json()
      setAttendees(data.attendees)
  }
}
  useEffect(() => {
    loadAttendees()
  }, [])

if (attendees === undefined) {
  return null;
}

    return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Conference</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map(attendee => {
                return (
                <tr key={attendee.href}>
                  <td>{ attendee.name }</td>
                  <td>{ attendee.conference }</td>
                </tr>
                )
              })}
            </tbody>
          </table>
      )
}

export default AttendeesList