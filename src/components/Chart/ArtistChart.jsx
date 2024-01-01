import { useState, useEffect, useCallback } from 'react'
import {ClipLoader} from 'react-spinners';
import './Chart.css';

const musicMatchURL = import.meta.env.VITE_API_URL;

function ArtistChart() {
    const [selectedCountry, setSelectedCountry] = useState('it');
    const [selectedPage, setSelectedPage] = useState(1);
    const [selectedPageSize, setSelectedPageSize] = useState(3);
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    const artistSearch = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${musicMatchURL}chartArtists?page=${selectedPage}&pageSize=${selectedPageSize}&country=${selectedCountry}`);
            const data = await response.json();
            setResponseData(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error fetching artist search:", error);
            setResponseData(JSON.stringify(error, null, 2));
        } finally {
            setLoading(false);
        }
    }, [selectedCountry, selectedPage, selectedPageSize]);

    const countries = [
        { value: "it", label: "Italy" },
        { value: "us", label: "USA" },
        // Add more countries here
        { value: "gb", label: "United Kingdom" },
        { value: "de", label: "Germany" },
    ];


    useEffect(() => {
        artistSearch();
    }, []);
    useEffect(()=>{
        if(!selectedCountry || !selectedPage || !selectedPageSize) return;
        artistSearch();
    }, [selectedCountry, selectedPage, selectedPageSize]);
    return (
        <>
            <div>
                <h3>Chart Artist</h3>
                <p>
                    Countries: &nbsp;
                    <select onChange={event => {
                        setSelectedCountry(event.target.value);
                    }} >
                        {countries.map(country => {
                            return <option selected={country.value === selectedCountry} value={country.value}>{country.label}</option>
                        })}
                    </select>
                </p>
                <p>
                    Page: &nbsp;
                    <input type="number" min="1" value={selectedPage} onChange={event=>setSelectedPage(event.target.value)} />
                </p>
                <p>
                    Page Size: &nbsp;
                    <input type="number" min="1" value={selectedPageSize} onChange={event=>setSelectedPageSize(event.target.value)} />
                </p>
                {loading ? <ClipLoader /> : <pre>{responseData}</pre>}
            </div>
        </>
    )
}

export default ArtistChart; 
