import React, { useState } from 'react';
import Header from '../components/Header';
import TicketForm from '../components/TicketForm';

const HomePage = () => {
    const [tickets, setTickets] = useState([]);

    const handleTicketSubmit = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    return (
        <div>
            <Header />
            <TicketForm onSubmit={handleTicketSubmit} />
            <div className="ticket-list">
                <h2>Tickets</h2>
                <ul>
                    {tickets.map((ticket, index) => (
                        <li key={index}>
                            <h3>{ticket.title}</h3>
                            <p>{ticket.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
