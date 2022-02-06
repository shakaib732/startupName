import React from 'react'
import './NameCard.css'

function NameCard({ suggestedName }) {
    const url = "https://in.godaddy.com/domainsearch/find?checkAvail=1&tmskey=1dom_03_godaddyb&domainToCheck="
    return (
        <a target="_blank" rel='noreferrer'  className='card-link' href={`${url}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">
                    {suggestedName}
                </p>
            </div>
        </a>
    )
}

export default NameCard
