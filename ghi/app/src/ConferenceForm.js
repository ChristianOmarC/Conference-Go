import React, { useEffect, useState } from 'react'

function ConferenceForm (props) {

    const [locations, setLocations] = useState([])
    const [name, setName] = useState("")
    const [starts, setStart] = useState("")
    const [ends, setEnd] = useState("")
    const [description, setDescription] = useState("")
    const [maxPresentations, setMaxPresentation] = useState("")
    const [maxAttendees, setMaxAttendees] = useState("")
    const [location, setLocation] = useState("")
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/locations/'
    
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            setLocations(data.locations)
        };
    }


    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)
    }

    const handleStartChange = (e) => {
        const value = e.target.value
        setStart(value)
    }

    const handleEndChange = (e) => {
        const value = e.target.value
        setEnd(value)
    }

    const handleDescriptionChange = (e) => {
        const value = e.target.value
        setDescription(value)
    }

    const handleMaxPresentationsChange = (e) => {
        const value = e.target.value
        setMaxPresentation(value)
    }

    const handlemaxAttendeesChange = (e) => {
        const value = e.target.value
        setMaxAttendees(value)
    }

    const handleLocationChange = (e) => {
        const value = e.target.value
        setLocation(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        
        data.name = name
        data.starts = starts
        data.ends = ends
        data.description = description
        data.max_presentations = maxPresentations
        data.max_attendees = maxAttendees
        data.location = location

        const conferenceUrl = 'http://localhost:8000/api/conferences/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        try {
            const response = await fetch(conferenceUrl, fetchConfig);
    
            if (response.ok) {
                const newConference = await response.json();
    
                setName('');
                setStart('');
                setEnd('');
                setDescription('');
                setMaxPresentation('');
                setMaxAttendees('');
                setLocation(null);
            } else {
                console.error('Request failed:', response.status);
            }
        } catch (error) {
            console.error('Error handling request:', error);
        }        
    };


        
    

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new conference</h1>
                    <form onSubmit={handleSubmit}  id="create-conference-form">
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleNameChange}
                        value={name}
                        placeholder="Name"
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleStartChange}
                        value={starts}
                        required
                        type="date"
                        id="starts"
                        name="starts"
                        className="form-control"
                        />
                        <label htmlFor="starts">Starts</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleEndChange}
                        value={ends}
                        required
                        type="date"
                        id="ends"
                        name="ends"
                        className="form-control"
                        />
                        <label htmlFor="ends">Ends</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                        onChange={handleDescriptionChange}
                        value={description}
                        placeholder="Description"
                        required
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        ></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleMaxPresentationsChange}
                        value={maxPresentations}
                        placeholder="Max Presentations"
                        required
                        type="text"
                        id="max_presentations"
                        name="max_presentations"
                        className="form-control"
                        />
                        <label htmlFor="max_presentations">Max Presentations</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handlemaxAttendeesChange}
                        value={maxAttendees}
                        placeholder="Max Attendees"
                        required
                        type="text"
                        id="max_attendees"
                        name="max_attendees"
                        className="form-control"
                        />
                        <label htmlFor="max_attendees">Max Attendees</label>
                    </div>

                    <div className="mb-3">
                        <select
                        onChange={handleLocationChange}
                        value={location || ""}
                        required
                        id="location"
                        name="location"
                        className="form-select"
                        >
                        <option value="" disabled>
                            Choose a location
                        </option>
                        {locations.map((location) => {
                            return (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            )
                        })}
                        </select>
                    </div>
                    <button type="submit"className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
      </div>
    )
}

export default ConferenceForm