import React from 'react'
import { Container, Button } from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=4812520680ff45bf8e87a5ef6ab95e71&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'


export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Button variant="success" href={AUTH_URL}>Login with SPOTIFY</Button>
        </Container>
    )
}
