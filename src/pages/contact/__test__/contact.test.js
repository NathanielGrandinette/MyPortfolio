import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../contact'
import { BrowserRouter } from 'react-router-dom'

const MockRouter = () => {
    return (
        <BrowserRouter>
            <Contact />
        </BrowserRouter>
    )
}

const renderPage = () => {
    return (
        render(<MockRouter />)
    )
}

describe("Contact me page", () => {
    beforeEach(() => {
        renderPage()
    })
    it("Should render contact details header", async () => {
        const contactHeader = screen.getByText("Contact Details")
        expect(contactHeader).toBeInTheDocument()
    })

    it("Should render location", async () => {
        const locationElement = screen.getByTestId("location")
        expect(locationElement).toBeInTheDocument()
    })

    it("Should render email", async () => {
        const emailElement = screen.getByTestId("email")
        expect(emailElement).toBeInTheDocument()
    })

    it("Should render phone number", () => {
        const phoneElement = screen.getByTestId("phone")
        expect(phoneElement).toBeInTheDocument()
    })
})